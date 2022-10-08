import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NoteGameService} from '../note-game.service';
import {ActivatedRoute, Router} from '@angular/router';
import {KeyComponent} from '../key/key.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Input() opts: any = {nNotes: 6};
  @ViewChild(KeyComponent, {static: true}) keys: KeyComponent;

  constructor(public noteGameService: NoteGameService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.noteGameService.init();
    const noteGameService = this.noteGameService;
    noteGameService.noteObserver = this.keys.noteClickedObservable();
    noteGameService.timeUp.subscribe(val => {
      this.router.navigate(['../results'], {relativeTo: this.route});
    });
    noteGameService.noteObserver.subscribe(val => {
      noteGameService.notesClicked.length < this.opts.nNotes ? noteGameService.notesClicked.push(val) : this.noteGameService.getNextExercise();
    });

  }

  repeatSequence() {
    this.noteGameService.repeatSequence();
  }


}
