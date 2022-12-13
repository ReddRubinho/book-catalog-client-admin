import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Book } from '../model/book/book';
import { BookService } from '../model/book/book.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentBook = this.messageSource.asObservable();

  private booksSearch = new BehaviorSubject<Book[]>(null!);
  foundBooks = this.booksSearch.asObservable();

  constructor(private bService: BookService) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  findAll() {
    this.bService.getAll().subscribe(
      books => this.booksSearch.next(books)
    );
  }

  findByTitle(title: string) {
    this.bService.getByTitle(title).subscribe(
      books => this.booksSearch.next(books)
    );
  }
}
