import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OscillatorService } from '../oscillator.service';
import { NoteGameService } from '../note-game.service';
import { bufferCount } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Input() opts: any = {nNotes:6};
  @ViewChild(KeyComponent, { static: true }) keys:KeyComponent;
  
constructor(public noteGameService: NoteGameService, private router: Router,private route: ActivatedRoute) { 
}

ngOnInit() {
  this.noteGameService.init();
  const noteGameService = this.noteGameService;
  noteGameService.noteObserver = this.keys.noteClickedObservable();
  noteGameService.timeUp.subscribe(val => { this.router.navigate(['../results'],{relativeTo:this.route}); console.log('Keyboard received event notification');} );
  noteGameService.noteObserver.subscribe(val => {
    
    noteGameService.notesClicked.length < this.opts.nNotes ? noteGameService.notesClicked.push(val) : this.noteGameService.getNextExcersice();
  });
  
  }
  repeatSequence(){
    this.noteGameService.repeatSequence();
  }

  
}
