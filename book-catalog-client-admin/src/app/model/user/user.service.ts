import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  //get all users
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  //post a new user
  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  //get a user
  get(username: string): Observable<User> {
    return this.http.get<User>(this.url + '/' + username);
  }

  //update a user
  update(user: User): Observable<User> {
    return this.http.patch<User>(this.url + '/' + user.username, user);
  }

  //delete a user
  delete(username: string):Observable<User>{
    return this.http.delete<User>(this.url + '/' + username)
  }
}
