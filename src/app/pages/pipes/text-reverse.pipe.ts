import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReverse'
})
export class TextReversePipe implements PipeTransform {

  transform(value: string, arg: number = 0): string {

    if(arg >= 1) {
      let slicedStr = value.slice(0, arg);
      let leftStr = value.slice(arg);
      return `${slicedStr.split('').reverse().join('')}${leftStr}`;
    }

    return value.split('').reverse().join('');
  }

}
