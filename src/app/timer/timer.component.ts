import { Component, OnInit, Input } from '@angular/core';
import { NoteGameService } from '../note-game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor( public noteGameService: NoteGameService ) {
  

   }
  addMinutes(amount: number){

    this.noteGameService.settings.time += amount;
  }
  ngOnInit() {

  }

}
