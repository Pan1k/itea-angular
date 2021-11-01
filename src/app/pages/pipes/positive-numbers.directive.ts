import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositiveNumbers]'
})
export class PositiveNumbersDirective {
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    event.key.match(/^[0-9]*\.?[0-9]*$/) === null ? event.preventDefault() : '';
  }
}
