import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {NoteGameService} from '../note-game.service';
import {Tempi, Tempo} from '../utils/Tempo';

@Component({
  selector: 'app-tempo-selector',
  templateUrl: './tempo-selector.component.html',
  styleUrls: ['./tempo-selector.component.scss']
})
export class TempoSelectorComponent implements OnInit {
  tempo = 100;
  selectedTempo: Subject<number> = new Subject();
  tempoControl = new FormControl('', [Validators.min(1)]);


  constructor(public noteGameService: NoteGameService) {
    this.tempo = noteGameService.settings.tempo;
  }

  public WellKnownTempi = Tempi;

  ngOnInit() {
  }

  isTempoSelected(t: Tempo) {
    return t.isInRange(this.tempo);
  }

  onTempoChange(t: number | Tempo) {
    if (typeof t === 'number') {
      this.tempo = t < 1 ? 1 : t;
      this.selectedTempo.next(this.tempo);
    } else {
      this.tempo = (t as Tempo).beatsPerMinute();
      this.selectedTempo.next((t as Tempo).beatsPerMinute());
    }
  }

  tempoSelectedObservable(): Observable<number> {
    return this.selectedTempo.asObservable();
  }
}
