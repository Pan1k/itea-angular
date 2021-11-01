import { Injectable } from '@angular/core';
import { IBook } from "./book.interface";

@Injectable({
  providedIn: 'root'
})

export class BooksListService {

  booksList: Array<IBook>;

  constructor() {
    this.booksList = [
      {
        id: 1,
        title: 'Совершенный код',
        img: 'data:image/jpeg;base64,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',
        description: 'Книга представляет собой практическое руководство по разработке программного обеспечения. Для специалистов',
        author: 'Стив Макконнелл',
        postInfo: 'Русская редакция, 2010'
      },
      {
        id: 2,
        title: 'Изучаем программирование на JavaScript',
        img: 'https://books.google.com.ua/books/publisher/content?id=3FBbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73GJKHHKlLSVK6Z-ckqWWUuatM0uPdqyQ1wNoVAmmMIIjKnEMjhPCkv23lzp3eltRMu9beVsUxAFk9RFekdJ7znxvk9S-zpfwKD7FZCMohK0xhwCAn85KbohCzQpkwEeacTFSYD',
        description: 'Вы готовы сделать шаг вперед в веб-программировании и перейти от верстки в HTML и CSS к созданию полноценных динамических страниц? Тогда пришло время познакомиться с самым «горячим» языком программирования — JavaScript! С помощью этой книги вы узнаете все о языке JavaScript — от переменных до циклов. Вы поймете, почему разные браузеры по-разному реагируют на код и как написать универсальный код, поддерживаемый всеми браузерами. Вам станет ясно, почему с кодом JavaScript никогда не придется беспокоиться о перегруженности страниц и ошибках передачи данных. Не пугайтесь, даже если ранее вы не написали ни одной строчки кода, — благодаря уникальному формату подачи материала эта книга с легкостью ',
        author: 'Фримен Эрик, Робсон Элизабет',
        postInfo: 'Издательский дом "Питер", 23 апр. 2018 г.'
      }
    ]
  }

  get getBooks(): Array<IBook> {
    return this.booksList;
  }

  /*set addBook(id: number): void {
    console.log(this.booksList);
  }

  set deleteBook(id: number): void {
    console.log(this.booksList);
  }

  set updateBook(id: number): void {
    console.log(this.booksList);
  }*/
}