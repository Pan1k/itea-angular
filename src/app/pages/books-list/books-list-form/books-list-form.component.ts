import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { BooksListService } from '../books-list.service';
import { IBook, IBookUpdate } from "../book.interface";

@Component({
  selector: 'app-books-list-form',
  templateUrl: './books-list-form.component.html',
  styleUrls: ['./books-list-form.component.scss']
})
export class BooksListFormComponent implements OnInit, OnChanges {

  @Input() formOnSubmit: any;
  @Input() bookId: number;

  @Output() onAddBook = new EventEmitter<IBook>();
  @Output() onUpdateBook = new EventEmitter<IBookUpdate>();

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
    this.bookId = 0;
    this.booksList = booksListService.getBooks;
    this.book = this.newBook;
    this.formOnSubmit = () => {};
  }

  ngOnChanges(): void {
    this.book = this.bookId
      ? this.booksList.filter(x => x.id === this.bookId)[0]
      : this.newBook;
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
    this.book.id = this.booksList.length + 1;
    this.formOnSubmit(false);
    this.onAddBook.emit(this.book);
    this.clearBook();
  }

  updateBook() {
    this.onUpdateBook.emit({
      id: this.bookId,
      book: this.book
    });
    this.clearBook();
  }

}
