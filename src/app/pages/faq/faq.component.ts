import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './faq.constants';
import { ILesson } from "./faq.interface";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  lessons: Array<ILesson>;
  filterLesson: number;

  constructor() {
    this.lessons = CONSTANTS.LESSONS;
    this.filterLesson = 0;
  }

  ngOnInit(): void {
    console.log('FaqComponent');
  }

  checkForObject(el: string | object) {
    return typeof el === 'object';
  }

  changeFiltrationClick(id: number): void {
    this.filterLesson = id;
  }

}
