import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent implements OnInit {

  @Input() book: IBook;

  constructor() {
    this.book = {
      id: 0,
      title: '',
      img: '',
      description: '',
      author: '',
      postInfo: ''
    }
  }

  ngOnInit(): void {
  }

}
