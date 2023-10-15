import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomLabel]',
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private element: ElementRef<HTMLElement>) {
    //console.log(this.element);
    this.htmlElement = element;
    this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }
}
