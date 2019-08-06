import { Injectable } from '@angular/core';
import { Observable, Subject, interval} from 'rxjs'
import { OscillatorService } from './oscillator.service';
import { takeWhile, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteGameService {
  totalExcersices = 0;
  accuraccy = 0;
  notesClicked: number[] = [];
  targetNotes: number[] = [];
  timer = interval(1000);

  noteObserver: Observable<number>; 
  tempoObserver: Observable<number>;
  nNotesObserver: Observable<number>;
  timeUp: Subject<any> = new Subject();
  settings: any = {tempo: 100, notesAvailable: new Set([0, 4, 7]), nNotes: 7, time: 300 }

  constructor(private oscService: OscillatorService) {

   }
   
   init(){
    this.drawNotes()
    this.notesClicked.splice(0, this.settings.nNotes);
    this.oscService.playSequence(this.targetNotes, this.settings.tempo);
    this.timer.pipe( takeWhile(() => this.settings.time >0 ), finalize(() => {console.log('Finalized');})).subscribe(
      val => {this.settings.time--;console.log(val)});
    }
    
  getNextExcersice() {
    this.evaluate();
    this.drawNotes()
    this.notesClicked.splice(0, this.settings.nNotes);
    this.oscService.playSequence(this.targetNotes, this.settings.tempo);

  }
  drawNotes(){
    this.targetNotes = [];
    const aNotesArray: number[] = Array.from(this.settings.notesAvailable);
    for (let i = 0; i < this.settings.nNotes; i++) {
      let drawFrom = this.targetNotes.length > 0 ? aNotesArray.filter(val => val !==this.targetNotes[this.targetNotes.length -1]) : aNotesArray; 
      let ind = Math.floor(Math.random() * ( drawFrom.length));
      this.targetNotes.push( drawFrom[ind] );
      }
    //console.log(this.targetNotes)
  }
  evaluate(){
    this.totalExcersices++;
    const results: number[] = this.targetNotes.map(
      (val, index) => {
      return val === this.notesClicked[index] ? 1 : 0;
    });
    
    this.accuraccy += results.reduce((accumulator, currentValue) => accumulator + currentValue ) / results.length * 100;
      
    console.log(this.accuraccy);
  }
  repeatSequence() {
    this.oscService.playSequence(this.targetNotes, this.settings.tempo);
  }
  setNotesObservable(observable: Observable<number>){
    this.noteObserver = observable;
    this.noteObserver.subscribe( val => {
      this.settings.notesAvailable.has(val) ? this.settings.notesAvailable.delete(val) : this.settings.notesAvailable.add(val);
    } ) 
  }
  
  setTempoObservable(observable: Observable<number>) {
    this.tempoObserver = observable;
    this.tempoObserver.subscribe(
      val => {
        this.settings.tempo = val;
        //console.log('tempo:', val);
      }
    )
  }
  setNNotesObservable(observable: Observable<number>){
    this.nNotesObserver = observable;
    this.nNotesObserver.subscribe(
      val => {
        this.settings.nNotes = val;
      }
    )
  }
}
