import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {OscillatorService} from './oscillator.service';
import {finalize, takeWhile} from 'rxjs/operators';
import {Cadence} from './utils/Cadence';

@Injectable({
  providedIn: 'root'
})
export class NoteGameService {

  totalExercises = 0;
  accuracy = 0;
  notesClicked: number[] = [];
  targetNotes: number[] = [];
  exerciseLimit = {value: 0, active: false};
  timeLimit = {value: 0, active: false};
  timer = interval(1000);
  startingCadence = Cadence.None;
  majorCadence = false;
  minorCadence = false;
  showFirstNote = false;
  noteObserver: Observable<number>;
  tempoObserver: Observable<number>;
  nNotesObserver: Observable<number>;
  timeUp: Subject<any> = new Subject();
  settings: any = {tempo: 100, notesAvailable: new Set([0, 4, 7]), nNotes: 7, time: 60};

  constructor(private oscService: OscillatorService) {
    const storage = window.localStorage;

    const s = JSON.parse(storage.getItem('settings'));
    if (s !== null) {
      this.settings = {...s, notesAvailable: new Set(s.notesAvailable)};
      console.log(this.settings);
    }
  }

  init() {
    this.drawNotes();
    this.notesClicked.splice(0, this.settings.nNotes);

    this.oscService.playSequence(this.getCadence().concat(this.targetNotes), this.settings.tempo);
    this.timer.pipe(takeWhile(() => this.settings.time > 0), finalize(() => {
      console.log('Finalized');
    })).subscribe(
      val => {
        this.settings.time--;
        console.log(val);
      });
  }

  getNextExercise() {
    this.evaluate();
    this.drawNotes();
    this.notesClicked.splice(0, this.settings.nNotes);

    console.log();
    this.oscService.playSequence(this.getCadence().concat(this.targetNotes), this.settings.tempo);

  }

  drawNotes() {
    this.targetNotes = [];
    const aNotesArray: number[] = Array.from(this.settings.notesAvailable);
    for (let i = 0; i < this.settings.nNotes; i++) {
      const drawFrom = this.targetNotes.length > 0 ? aNotesArray.filter(val => val !== this.targetNotes[this.targetNotes.length - 1]) : aNotesArray;
      const ind = Math.floor(Math.random() * (drawFrom.length));
      this.targetNotes.push(drawFrom[ind]);

    }
  }

  evaluate() {
    this.totalExercises++;
    const results: number[] = this.targetNotes.map(
      (val, index) => {
        return val === this.notesClicked[index] ? 1 : 0;
      });

    this.accuracy += results.reduce((accumulator, currentValue) => accumulator + currentValue) / results.length * 100;

    console.log(this.accuracy);
  }

  repeatSequence() {
    this.oscService.playSequence([this.targetNotes], this.settings.tempo);
  }

  setNotesObservable(observable: Observable<number>) {
    this.noteObserver = observable;
    this.noteObserver.subscribe(val => {
      this.settings.notesAvailable.has(val) ? this.settings.notesAvailable.delete(val) : this.settings.notesAvailable.add(val);
    });
  }

  setTempoObservable(observable: Observable<number>) {
    this.tempoObserver = observable;
    this.tempoObserver.subscribe(
      val => {
        this.settings.tempo = val;
      }
    );
  }

  setNNotesObservable(observable: Observable<number>) {
    this.nNotesObserver = observable;
    this.nNotesObserver.subscribe(
      val => {
        this.settings.nNotes = val;
      }
    );
  }

  getCadence() {
    const drawFrom = [];
    let ex = [];
    if (this.startingCadence === Cadence.Major) {
      drawFrom.push('M');
    }
    if (this.startingCadence === Cadence.Minor) {
      drawFrom.push('M');
    }
    switch (drawFrom.length) {
      case 0:
        return [];

      case 1:
        ex = this.cadenceNotes(drawFrom[0]);

        return ex;

      case 2:
        // Math.round(Math.random() + 1)

        ex = this.cadenceNotes(drawFrom[Math.round(Math.random())]);


        return ex;

    }
  }

  // should be moved to misc.service
  cadenceNotes(cadenceType: string) {
    switch (cadenceType) {
      case 'm':
        return [[0, 3, 7], [5, 8, 12], [7, 10, 14], [0, 3, 7], 'rest'];
      case 'M':
        return [[0, 4, 7], [5, 9, 12], [7, 11, 14], [0, 4, 7], 'rest'];
    }

  }


  saveSettings() {
    const storage = window.localStorage;
    storage.setItem('settings', JSON.stringify({...this.settings, notesAvailable: Array.from(this.settings.notesAvailable)}));

  }

  setStartingCadence(cadence: Cadence) {
    if (cadence === this.startingCadence) {
      this.startingCadence = Cadence.None;
    } else {
      this.startingCadence = cadence;
    }
  }

  isMajorCadence(): boolean {
    return this.startingCadence === Cadence.Major;
  }
  isMinorCadence(): boolean {
    return this.startingCadence === Cadence.Minor;
  }
}
