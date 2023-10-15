import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]',
})
export class CustomLabelDirective implements OnChanges {
  private htmlElement?: ElementRef<HTMLElement>;

  @Input() color: string = 'green';

  @Input() errors: ValidationErrors | null | undefined;

  constructor(private element: ElementRef<HTMLElement>) {
    //console.log(this.element);
    this.htmlElement = element;
    this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this.color;
    this.setErrorsText();
  }

  setErrorsText() {
    if (!this.htmlElement) return;
    if (!this.errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }
    const errors_names = Object.keys(this.errors);
    if (errors_names.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }
    if (errors_names.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML =
        'La longitud debe de ser de al menos 6 caracteres';
      return;
    }
    if (errors_names.includes('email')) {
      this.htmlElement.nativeElement.innerHTML =
        'El correo electrónico no es valido';
      return;
    }
  }
}
