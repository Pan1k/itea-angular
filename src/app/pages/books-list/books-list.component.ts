import { Component, OnInit } from '@angular/core';
import { IBook, IBookUpdate } from './book.interface';
import { BooksListService } from './books-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksList: Array<IBook>;
  isShowForm = false;
  bookIndex: number = 0;

  constructor(private booksListService: BooksListService) {
    this.booksList = this.booksListService.getBooks;
  }

  ngOnInit(): void {
  }

  addBookForm() {
    this.bookIndex = 0;
    this.setFormVisibilityState();
  }

  onShowUpdate(id: number) {
    this.bookIndex = id;
    this.setFormVisibilityState();
  }

  setFormVisibilityState(state: boolean = true): void {
    this.isShowForm = state;
  }

  updateBooksList() {
    this.booksList = this.booksListService.getBooks;
  }

  onAddBook(book: IBook) {
    this.booksListService.addBook = book;
    this.updateBooksList();
    this.setFormVisibilityState(false);
  }

  onDeleteBook(id: number) {
    this.booksListService.deleteBook = id;
    this.updateBooksList();
  }

  onUpdateBook(data: IBookUpdate) {
    this.booksListService.updateBook = data;
    this.updateBooksList();
    this.setFormVisibilityState(false);
  }
}
