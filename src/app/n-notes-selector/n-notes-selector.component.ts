import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-n-notes-selector',
  templateUrl: './n-notes-selector.component.html',
  styleUrls: ['./n-notes-selector.component.scss']
})
export class NNotesSelectorComponent implements OnInit {
  nNotes = 7;
  selectedNNotes = new Subject<number>();

  constructor() { }

  ngOnInit() {
  }
nNotesObservable(){
  return this.selectedNNotes.asObservable();
}
onChange(change: number){
  this.nNotes = (this.nNotes + change) > 0 ? this.nNotes + change : this.nNotes; 
  this.selectedNNotes.next(this.nNotes);
}
}
