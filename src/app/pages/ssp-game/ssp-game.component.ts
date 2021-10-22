import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssp-game',
  templateUrl: './ssp-game.component.html',
  styleUrls: ['./ssp-game.component.scss']
})
export class SspGameComponent implements OnInit {
  gameElems = ['Камень', 'Ножницы', 'Бумага'];
  isGameStarted: boolean = false;
  AIChoice: number = 0;
  gameResult: string = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log('SspGameComponent');
  }

  getTitle(id: number): string {
    return this.gameElems[id];
  }

  userButtonClickHandler(val: number): void {
    this.isGameStarted = true;
    this.AIChoice = this.AISelectEvent();
    this.showResult(val);
  }

  showResult(val: number) {
    if(val === this.AIChoice) {
      this.gameResult = 'Ничья'
    } else if (val < this.AIChoice) {
      this.gameResult = 'Вы победили!!!'
    } else {
      this.gameResult = 'Вы проиграли =('
    }
  }

  AISelectEvent(): number {
    return Math.floor(Math.random() * 3);
  }

}
