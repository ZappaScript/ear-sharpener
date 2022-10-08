import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleKeyboardContainerComponent } from './simple-keyboard-container.component';

describe('KeyboardContainerComponent', () => {
  let component: SimpleKeyboardContainerComponent;
  let fixture: ComponentFixture<SimpleKeyboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleKeyboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleKeyboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
