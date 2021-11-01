import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  textValue: string;
  typedValue: string;
  countLettersToReverse: number;

  constructor() {
    this.textValue = '';
    this.typedValue = '';
    this.countLettersToReverse = 0;
  }

  ngOnInit(): void {
  }

  changeTextValue(e: any): void {
    this.textValue = e.target.value;
  }

  changeCountToReverse(e: any): void {
    this.countLettersToReverse = e.target.value < 0 ? 0 : e.target.value;
  }

}
