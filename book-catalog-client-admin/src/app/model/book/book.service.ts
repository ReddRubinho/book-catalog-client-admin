import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string = "http://localhost:8080/"

  constructor() { }
}
