import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent implements OnInit {

  @Input() book: IBook;
  @Input() bookIndex: number;

  @Output() onShowEditForm = new EventEmitter<number>();
  @Output() onDeleteBook = new EventEmitter<number>();

  constructor() {
    this.bookIndex = 0;
    this.book = {
      id: 0,
      title: '',
      img: '',
      author: '',
      postInfo: ''
    }
  }

  ngOnInit(): void {
  }

  deleteBook(id: number) {
    this.onDeleteBook.emit(id);
  }

  updateBook(id: number) {
    this.onShowEditForm.emit(id);
  }

}
