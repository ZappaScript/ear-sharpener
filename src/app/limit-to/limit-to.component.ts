import { Component, OnInit } from '@angular/core';

import { NoteGameService } from '../note-game.service';

@Component({
  selector: 'limit-to',
  templateUrl: './limit-to.component.html',
  styleUrls: ['./limit-to.component.scss']
})
export class LimitToComponent implements OnInit {

  constructor(public noteGameService: NoteGameService) { }

  ngOnInit() {
  }
  toggleExerciseLimit(){
    this.noteGameService.exerciseLimit.active = !this.noteGameService.exerciseLimit.active; 
  }
  toggleTimeLimit(){
    this.noteGameService.timeLimit.active = !this.noteGameService.timeLimit.active; 
  }
}
