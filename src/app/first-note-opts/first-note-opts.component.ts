import { Component, OnInit } from '@angular/core';
import { NoteGameComponent } from '../note-game/note-game.component';
import { NoteGameService } from '../note-game.service';

@Component({
  selector: 'first-note-opts',
  templateUrl: './first-note-opts.component.html',
  styleUrls: ['./first-note-opts.component.scss']
})
export class FirstNoteOptsComponent implements OnInit {
  
  constructor(public noteGameService: NoteGameService) { }


  ngOnInit() {
  }

  onOptClick(opt: number){
    switch(opt){
      case 1:

        this.noteGameService.majorCadence = !this.noteGameService.majorCadence;
        if(this.noteGameService.majorCadence && this.noteGameService.showFirstNote) {
          this.noteGameService.showFirstNote = false;
        }
        break;
      case 2:
        this.noteGameService.minorCadence = !this.noteGameService.minorCadence;
        if(this.noteGameService.minorCadence && this.noteGameService.showFirstNote) {
          this.noteGameService.showFirstNote = false;
        }
        break;
      case 3:
        this.noteGameService.showFirstNote = !this.noteGameService.showFirstNote;
        if (this.noteGameService.showFirstNote && (this.noteGameService.majorCadence || this.noteGameService.minorCadence)){
          this.noteGameService.majorCadence = false;
          this.noteGameService.minorCadence = false;
        }

    }
  }
}
/* Commentary for my future self.
Maybe I should retain the current way of using observables to modify the values inside of NoteGameService?
The service is getting somewhat big. */