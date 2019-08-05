import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGameComponent } from './note-game.component';

describe('NoteGameComponent', () => {
  let component: NoteGameComponent;
  let fixture: ComponentFixture<NoteGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
