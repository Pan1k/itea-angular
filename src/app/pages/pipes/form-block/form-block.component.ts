import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit {

  @Input() title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
  }

}
