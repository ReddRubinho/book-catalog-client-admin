import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/model/user/user';
import { UserService } from 'src/app/model/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user!: User;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _loggedUser$ = new ReplaySubject<User>();
  loggedUser$ = this._loggedUser$.asObservable();

  constructor(private userService: UserService) {

  }

  login(username: string, password: string) {
    this.userService.get(username).subscribe(user => {
      if (user.username === username && user.user_password === password) {
        this._isLoggedIn$.next(true);
        this._loggedUser$.next(user);

        localStorage.setItem('currentUser', user.username);
        localStorage.setItem('isLogged', 'true');

        this.user = user;
        console.log(this.user);
      }
    });

  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', 'false');
  }
}
