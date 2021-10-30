import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.scss'],
  inputs: ['items: ul-list'],
})

export class UlListComponent implements OnInit {

  items: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items, typeof this.items);
  }

}
