import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NNotesSelectorComponent } from './n-notes-selector.component';

describe('NNotesSelectorComponent', () => {
  let component: NNotesSelectorComponent;
  let fixture: ComponentFixture<NNotesSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NNotesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NNotesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
