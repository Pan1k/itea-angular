import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPipes]'
})

export class PipesDirective {

  @Input('appPipes') typedValue: string;

  constructor() {
    this.typedValue = '';
  }

  @HostListener('input') onInputChange () {
    console.log(this.typedValue);
    this.keyPressEventHandler();
  }

  private keyPressEventHandler() {
    console.log(this.typedValue);
  }

}
