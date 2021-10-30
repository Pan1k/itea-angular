import { Pipe, PipeTransform } from '@angular/core';
import { ILesson } from './faq.interface';

@Pipe({
  name: 'filterByLesson'
})

export class FilterByLessonPipe implements PipeTransform {

  transform(value: Array<ILesson>, lessonNumber: number): Array<ILesson> {
    return (lessonNumber === 0)
      ? value
      : value.filter(x => x.lesson === lessonNumber);
  }

}
