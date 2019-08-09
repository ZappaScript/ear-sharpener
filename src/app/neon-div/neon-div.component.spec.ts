import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonDivComponent } from './neon-div.component';

describe('NeonDivComponent', () => {
  let component: NeonDivComponent;
  let fixture: ComponentFixture<NeonDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
