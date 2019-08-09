import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitToComponent } from './limit-to.component';

describe('LimitToComponent', () => {
  let component: LimitToComponent;
  let fixture: ComponentFixture<LimitToComponent>;

  beforeEach(async(() => {
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
