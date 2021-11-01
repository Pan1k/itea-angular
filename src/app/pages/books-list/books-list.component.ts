import { Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';
import { BooksListService } from './books-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksList: Array<IBook>;

  constructor(private booksListService: BooksListService) {
    this.booksList = booksListService.getBooks;
  }

  ngOnInit(): void {
  }

}
