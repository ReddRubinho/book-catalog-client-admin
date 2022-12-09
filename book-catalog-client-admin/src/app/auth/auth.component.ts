import { Component, OnInit } from '@angular/core';
import labels from 'src/assets/json/labels.json';
import { NgOptimizedImage } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    labels: any = labels;

    login(form:NgForm){
      const email = form.value.email
      const password = form.value.password
    }
}
