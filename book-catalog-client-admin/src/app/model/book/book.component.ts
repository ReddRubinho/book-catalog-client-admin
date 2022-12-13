import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/datatransfer/data.service';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book!: Book;
  constructor(
    private bookService: BookService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.currentBook.subscribe(message => {
      this.bookService.get(message).subscribe(
        book => {
          this.book = book;
        }
      );
    });
  }


}
