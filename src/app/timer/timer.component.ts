import { Component, OnInit, Input } from '@angular/core';
import {interval, TimeInterval, Subscription, Subject} from 'rxjs'
import {takeWhile, finalize} from 'rxjs/operators';
import { NoteGameService } from '../note-game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input()  timeLeft: number = 10;
  source = interval(1000);
  subscribe: Subscription;
  
  constructor( private noteGameService: NoteGameService ) {
    let example = this.source.pipe( takeWhile(() => this.timeLeft >0 ), finalize(() => {console.log('Finalized'); noteGameService.timeUp.next(1)} ))
    this.subscribe = example.subscribe((val) => {this.timeLeft--;console.log(val)});

   }
  addMinutes(amount:number){

    this.timeLeft += amount;
  }
  ngOnInit() {

  }

}
