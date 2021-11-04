import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BooksListService } from '../books-list.service';
import { IBook } from "../book.interface";

@Component({
  selector: 'app-books-list-form',
  templateUrl: './books-list-form.component.html',
  styleUrls: ['./books-list-form.component.scss']
})
export class BooksListFormComponent implements OnInit {

  @Input() formOnSubmit: any;
  @Input() bookIndex: number;

  @Output() onAddBook = new EventEmitter<IBook>();

  booksList: Array<IBook>;
  book: IBook;
  newBook: IBook = {
    id: 0,
    title: '',
    img: '',
    author: '',
    postInfo: ''
  }

  constructor(private booksListService : BooksListService) {
    this.bookIndex = 0;
    this.booksList = booksListService.getBooks;
    this.book = this.bookIndex
      ? this.booksList.filter(x => x.id === this.bookIndex)[0]
      : this.newBook;
    this.formOnSubmit = () => {};
  }

  ngOnInit(): void {
  }

  clearBook() {
    this.newBook = {
      id: 0,
      title: '',
      img: '',
      author: '',
      postInfo: ''
    }
  }

  addBook() {
    this.formOnSubmit(false);
    this.onAddBook.emit(this.book);
    this.clearBook();
  }

}
