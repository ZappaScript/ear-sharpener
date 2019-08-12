import { Component, OnInit, NgModule } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';
import { NoteGameService } from '../note-game.service';

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

  ngOnInit() {
  }

  
  isTempoSelected(t: string){
    switch (t){
      case 'Andante':
        return this.tempo <= 108 && this.tempo > 76;
      case 'Moderato':
        return this.tempo <= 120 && this.tempo > 108;
      case 'Allegro':
        return this.tempo <= 156 && this.tempo > 120;
      case 'Vivace':
        return this.tempo <= 176 && this.tempo > 156;
      case 'Presto':
        return this.tempo <= 200 && this.tempo > 176;
      case 'Custom':
        return this.tempo <= 76 || this.tempo > 200;
      }
  }
  onTempoChange(t: number) {
    
    this.tempo = t < 1 ? 1 : t;
    this.selectedTempo.next(this.tempo);
  }
  tempoSelectedObservable(): Observable<number> {
    return this.selectedTempo.asObservable();
  }
}
