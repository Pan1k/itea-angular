import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<IBook>): Array<IBook> {
    return value.sort((a, b) => b.id - a.id );
  }

}
