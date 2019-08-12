import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCounterComponent } from './exercise-counter.component';

describe('ExerciseCounterComponent', () => {
  let component: ExerciseCounterComponent;
  let fixture: ComponentFixture<ExerciseCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
