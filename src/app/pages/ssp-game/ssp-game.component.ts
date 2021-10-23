import { Component, OnInit } from '@angular/core';

interface IWinsArr {
  [index: number]: number[];
}

interface IGameResults {
  time: any,
  result: string,
  userChoice: number,
  aiChoice: number,
  score: string
}

@Component({
  selector: 'app-ssp-game',
  templateUrl: './ssp-game.component.html',
  styleUrls: ['./ssp-game.component.scss']
})

export class SspGameComponent implements OnInit {
  winsMatrix: IWinsArr = {
    0: [1],
    1: [2],
    2: [0]
  }
  gameElems = ['Камень', 'Ножницы', 'Бумага'];
  gameResults: Array<IGameResults> = [];
  isGameStarted: boolean = false;
  AIChoice: number = 0;
  userChoice: number = 0;
  gameResult: string = '';
  userScore: number = 0;
  aiScore: number = 0;

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
    this.userChoice = val;
    this.showResult();
  }

  showResult() {
    if(this.userChoice === this.AIChoice) {
      this.gameResult = 'Ничья'
    } else {
      if (this.winsMatrix[this.userChoice].includes(this.AIChoice)) {
        this.gameResult = 'Вы победили!!!'
        ++this.userScore;
      } else {
        this.gameResult = 'Вы проиграли =('
        ++this.aiScore;
      }
    }
    this.saveResult();
  }

  AISelectEvent(): number {
    return Math.floor(Math.random() * 3);
  }

  getResultClass(val: string): string {
    return (val === 'Ничья') ? '' : (val === 'Вы победили!!!') ? 'win' : 'lose';
  }

  saveResult(): void {
    let date = new Date().toLocaleString();
    let result: IGameResults = {
      time: date,
      result: this.gameResult,
      userChoice: this.AIChoice,
      aiChoice: this.userChoice,
      score: `${this.userScore}:${this.aiScore}`
    }
    this.gameResults = [
      result,
      ...this.gameResults
    ]
  }

}
