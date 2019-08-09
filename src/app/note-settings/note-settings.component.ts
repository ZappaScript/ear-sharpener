import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteGameService } from '../note-game.service';
import { KeyComponent } from '../key/key.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TempoSelectorComponent } from '../tempo-selector/tempo-selector.component';
import { NNotesSelectorComponent } from '../n-notes-selector/n-notes-selector.component';

@Component({
  selector: 'app-note-settings',
  templateUrl: './note-settings.component.html',
  styleUrls: ['./note-settings.component.scss']
})
export class NoteSettingsComponent implements OnInit {
  @ViewChild(KeyComponent) keys: KeyComponent;
  @ViewChild(TempoSelectorComponent) tempo: TempoSelectorComponent;
  @ViewChild(NNotesSelectorComponent) nNotes: NNotesSelectorComponent;
  notes: number[];
  deletePlease = true;
  constructor(public noteGameService: NoteGameService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.noteGameService.setNotesObservable( this.keys.noteClickedObservable());
    this.noteGameService.setTempoObservable(this.tempo.tempoSelectedObservable());
    this.noteGameService.setNNotesObservable(this.nNotes.nNotesObservable());
  }
  
  start(){
    if(this.noteGameService.settings.notesAvailable.size > 1){
      this.router.navigate(['../game'],{ relativeTo: this.route})
    }

      console.log(this.noteGameService.settings.notesAvailable.size)
  }
  test(event:any){
    this.deletePlease = !this.deletePlease;
    console.log("gotcha")

  }
}
