import { Component, OnInit } from '@angular/core';

interface IMenuItem {
  link: string,
  title: string
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems: Array<IMenuItem>;

  constructor() {
    this.menuItems = [
      { link: '/faq', title: 'FAQ' },
      { link: '/ssp-game', title: 'SSP-Game' },
      { link: '/pipes', title: 'Pipes' },
      { link: '/books-list', title: 'Books list' }
    ]
  }

  ngOnInit(): void {
  }

}
