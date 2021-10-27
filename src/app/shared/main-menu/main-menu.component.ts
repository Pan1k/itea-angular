import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems = [
    { link: '/faq', title: 'FAQ' },
    { link: '/ssp-game', title: 'SSP-Game' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
