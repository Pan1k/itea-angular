import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from "./faq.constants";

interface ILesson {
  lesson: number,
  question: string,
  answer: string | object;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  lessons: Array<ILesson>;

  constructor() {
    this.lessons = CONSTANTS.LESSONS;
  }

  ngOnInit(): void {
    console.log('FaqComponent');
  }

  checkForObject(el: string | object) {
    return typeof el === 'object';
  }

}
