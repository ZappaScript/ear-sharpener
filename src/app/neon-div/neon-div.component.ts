import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'neon-div',
  templateUrl: './neon-div.component.html',
  styleUrls: ['./neon-div.component.scss']
})
export class NeonDivComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() cssClass: boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick(){

    this.clicked.emit('emitted');

  }
}
