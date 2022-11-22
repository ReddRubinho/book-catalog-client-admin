import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url: string = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {}

  //get all books
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  //post a new book
  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  //get a books
  get(isbn:number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + isbn);
  }

  //update a book
  update(book: Book): Observable<Book> {
    return this.http.patch<Book>(this.url + '/' + book.isbn, book);
  }

  //delete a book
  delete(isbn:number):Observable<Book>{
    return this.http.delete<Book>(this.url + '/' + isbn)
  }
}
