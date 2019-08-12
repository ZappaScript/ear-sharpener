import { Component, OnInit } from '@angular/core';
import { NoteGameService } from '../note-game.service';

@Component({
  selector: 'exercise-counter',
  templateUrl: './exercise-counter.component.html',
  styleUrls: ['./exercise-counter.component.scss']
})
export class ExerciseCounterComponent implements OnInit {

  constructor( public noteGameService: NoteGameService) { }

  ngOnInit() {
  }
  
  changeExcerciseLimitValue(val: number){

    this.noteGameService.exerciseLimit.value += val;

  }

}
