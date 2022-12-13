import { Component, OnInit } from '@angular/core';
import labels from 'src/assets/json/labels.json';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

    form = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
    });
    labels: any = labels;

    constructor(private router: Router, private loginService: LoginService) {}
    
    ngOnInit(): void {

    }
  
    submitForm() {
      if(this.form.invalid) {
        console.log("invalid");
        return;
      }

      this.loginService.login(this.form.get('username')?.value!, this.form.get('password')?.value!);
      this.router.navigate(['catalog']);
    }
}
