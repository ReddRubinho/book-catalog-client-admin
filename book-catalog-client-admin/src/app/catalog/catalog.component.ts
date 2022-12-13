import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login/login.service';
import { DataService } from '../datatransfer/data.service';
import { Book } from '../model/book/book';
import { BookService } from '../model/book/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  books: Book[] = [];
  images: string[] = [];

  constructor(
    private bService: BookService,
    private router: Router,
    private data: DataService,
    private loginService: LoginService) { this.data.findAll();}

  ngOnInit(): void {
    this.data.currentBook.subscribe();
    this.data.foundBooks.subscribe(books => {

      this.books.splice(0);
      this.images.splice(0);

      for (var book of books) {
        this.books.push(book);
        this.images.push(book.bookImage);
      }
    }
    );
  }

  changeSelected(isbn: string) {
    this.data.changeMessage(isbn)
    this.router.navigate(['/book/' + isbn]);
  }
}
