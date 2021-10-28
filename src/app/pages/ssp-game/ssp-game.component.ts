import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './ssp-game.constants';

interface IWinsArr {
  [index: number]: number[];
}

interface IGameResults {
  time: string,
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
    0: [CONSTANTS.SCISSORS_ID, CONSTANTS.LIZARD_ID],
    1: [CONSTANTS.PAPER_ID, CONSTANTS.LIZARD_ID],
    2: [CONSTANTS.STONE_ID, CONSTANTS.SPOK_ID],
    3: [CONSTANTS.PAPER_ID, CONSTANTS.SPOK_ID],
    4: [CONSTANTS.SCISSORS_ID, CONSTANTS.STONE_ID]
  }
  gameResultPhrases = ['Ничья', 'Вы победили!!!', 'Вы проиграли =('];
  gameElems = [
    CONSTANTS.STONE_TITLE,
    CONSTANTS.SCISSORS_TITLE,
    CONSTANTS.PAPER_TITLE,
    CONSTANTS.LIZARD_TITLE,
    CONSTANTS.SPOK_TITLE
  ];
  gameResults: Array<IGameResults> = [];
  isGameStarted = false;
  AIChoice = 0;
  userChoice = 0;
  gameResult = 0;
  userScore = 0;
  aiScore = 0;

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
      this.gameResult = 0;
    } else {
      if (this.winsMatrix[this.userChoice].includes(this.AIChoice)) {
        this.gameResult = 1;
        this.userScore++;
      } else {
        this.gameResult = 2;
        this.aiScore++;
      }
    }
    this.saveResult();
  }

  AISelectEvent(): number {
    return Math.floor(Math.random() * this.gameElems.length);
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
