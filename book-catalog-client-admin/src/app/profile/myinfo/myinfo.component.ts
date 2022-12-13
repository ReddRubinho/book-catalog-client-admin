import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login/login.service';
import { User } from 'src/app/model/user/user';
import { UserService } from 'src/app/model/user/user.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService, private loginService: LoginService) {
    
    
  }

  ngOnInit(): void {
    
  }
  

}
