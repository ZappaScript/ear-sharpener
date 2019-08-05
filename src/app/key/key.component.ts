import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
  notes: number[] = Array.from({length: 12}, (_, i) => i);
  noteClicked : Subject<number> = new Subject();
  @Input() selected: boolean[];
 
  constructor() { }

  ngOnInit() {}

  Type(note: number ) {
    
    if(note === 1 || note === 3 || note === 6 || note === 8 || note === 10 ){
      //Black Key
      return true;
    }
    //White Key;
    return false;
  }
  onNoteClick(note: number){
    
    console.log(note);
    this.noteClicked.next(note);
  }
  noteClickedObservable(){
    return this.noteClicked.asObservable();
  }
}
