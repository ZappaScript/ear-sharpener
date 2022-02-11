import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExerciseCounterComponent } from './exercise-counter.component';

describe('ExerciseCounterComponent', () => {
  let component: ExerciseCounterComponent;
  let fixture: ComponentFixture<ExerciseCounterComponent>;

  beforeEach(waitForAsync(() => {
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
