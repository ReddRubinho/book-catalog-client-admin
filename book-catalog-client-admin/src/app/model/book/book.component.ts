import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  id:number;
  isbn:number;
  title:string;
  authors:string;
  publisher:string;
  pages:number;
  plot:string;
  bookImage:string;


}
