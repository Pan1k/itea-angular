import { Component, OnInit } from '@angular/core';

interface IWinsArr {
  [index: number]: number[];
}

interface IGameResults {
  time: any,
  result: number,
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
  gameResultPhrases = ['Ничья', 'Вы победили!!!', 'Вы проиграли =('];
  gameElems = ['Камень', 'Ножницы', 'Бумага'];
  gameResults: Array<IGameResults> = [];
  isGameStarted: boolean = false;
  AIChoice: number = 0;
  userChoice: number = 0;
  gameResult: number = 0;
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

  getResultClass(val: number): string {
    return (val === 0) ? '' : (val === 1) ? 'win' : 'lose';
  }

  userButtonClickHandler(val: number): void {
    this.isGameStarted = true;
    this.AIChoice = this.AISelectEvent();
    this.userChoice = val;
    this.showResult();
  }

  showResult(): void {
    if(this.userChoice === this.AIChoice) {
      this.gameResult = 0
    } else {
      if (this.winsMatrix[this.userChoice].includes(this.AIChoice)) {
        this.gameResult = 1
        this.userScore++;
      } else {
        this.gameResult = 2
        this.aiScore++;
      }
    }
    this.saveResult();
  }

  AISelectEvent(): number {
    return Math.floor(Math.random() * 3);
  }

  saveResult(): void {
    let date = new Date().toLocaleString();
    let result: IGameResults = {
      time: date,
      result: this.gameResult,
      userChoice: this.userChoice,
      aiChoice: this.AIChoice,
      score: `${this.userScore}:${this.aiScore}`
    }
    this.gameResults = [
      result,
      ...this.gameResults
    ]
  }

}
