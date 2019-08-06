import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNoteOptsComponent } from './first-note-opts.component';

describe('FirstNoteOptsComponent', () => {
  let component: FirstNoteOptsComponent;
  let fixture: ComponentFixture<FirstNoteOptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNoteOptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNoteOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
