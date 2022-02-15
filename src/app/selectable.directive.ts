import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[selectable]',

})
export class SelectableDirective {


  constructor(private el: ElementRef) {
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
