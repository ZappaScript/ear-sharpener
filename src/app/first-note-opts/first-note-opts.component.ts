import {Component, OnInit} from '@angular/core';
import {NoteGameService} from '../note-game.service';
import {Cadence} from '../utils/Cadence';

@Component({
  selector: 'first-note-opts',
  templateUrl: './first-note-opts.component.html',
  styleUrls: ['./first-note-opts.component.scss']
})
export class FirstNoteOptsComponent implements OnInit {

  constructor(public noteGameService: NoteGameService) {
  }

  ngOnInit() {
  }

  setMajorCadence() {
    this.noteGameService.setStartingCadence(Cadence.Major);
  }

  setMinorCadence() {
    this.noteGameService.setStartingCadence(Cadence.Minor);
  }

  onOptClick(opt: number) {
    switch (opt) {
      case 1:

        this.noteGameService.majorCadence = !this.noteGameService.majorCadence;
        if (this.noteGameService.majorCadence && this.noteGameService.showFirstNote) {
          this.noteGameService.showFirstNote = false;
        }
        break;
      case 2:
        this.noteGameService.minorCadence = !this.noteGameService.minorCadence;
        if (this.noteGameService.minorCadence && this.noteGameService.showFirstNote) {
          this.noteGameService.showFirstNote = false;
        }
        break;
      case 3:
        this.noteGameService.showFirstNote = !this.noteGameService.showFirstNote;
        if (this.noteGameService.showFirstNote && (this.noteGameService.majorCadence || this.noteGameService.minorCadence)) {
          this.noteGameService.majorCadence = false;
          this.noteGameService.minorCadence = false;
        }
    }
  }
}
