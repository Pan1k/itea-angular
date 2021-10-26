import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from "./faq.constants";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  lessons = CONSTANTS.LESSONS;

  constructor() {
  }

  ngOnInit(): void {
    console.log('FaqComponent');
  }

  checkForObject(el: string | object) {
    console.log('dddd', el, typeof el);
    return typeof el === 'object';
  }

}
