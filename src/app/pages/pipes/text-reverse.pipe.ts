import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReverse'
})
export class TextReversePipe implements PipeTransform {

  transform(value: string, arg: number = 0): unknown {

    if(arg >= 2) {
      let slicedStr = value.slice(0, arg);
      let leftStr = value.slice(arg);
      return `${slicedStr.split('').reverse().join('')}${leftStr}`;
    }

    return value.split('').reverse().join('');
  }

}
