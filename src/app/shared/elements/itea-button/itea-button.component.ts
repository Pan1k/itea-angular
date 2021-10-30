import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itea-button',
  templateUrl: './itea-button.component.html',
  styleUrls: ['./itea-button.component.scss']
})
export class IteaButtonComponent implements OnInit {

  @Input() clickHandler: any;

  constructor() {
    this.clickHandler = (...args: unknown[]) => { console.log('blah blah') };
  }

  ngOnInit(): void {
  }

  buttonClickHandler(e: MouseEvent) {
    e.preventDefault();
    this.clickHandler();
  }

}
