import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-item',
  inputs: ['link', 'title'],
  template: '<li><a routerLink="{{link}}">{{title}}</a></li>',
  styleUrls: ['./main-menu-item.component.scss']
})
export class MainMenuItemComponent implements OnInit {

  link = '';
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
