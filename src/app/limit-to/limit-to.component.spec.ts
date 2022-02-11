import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LimitToComponent } from './limit-to.component';

describe('LimitToComponent', () => {
  let component: LimitToComponent;
  let fixture: ComponentFixture<LimitToComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
