import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import labels from 'src/assets/json/labels.json';
import { LoginService } from '../auth/login/login.service';
import { DataService } from '../datatransfer/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  labels: any = labels;
  searchForm = new FormGroup({
    search: new FormControl(null, Validators.required)
  });
  isLogged!: boolean;

  constructor(private router: Router, public loginService: LoginService, private dataService: DataService) { }

  ngOnInit(): void {
   this.isLogged = JSON.parse(localStorage.getItem('isLogged')!) === true
  }


  login() {
    this.router.navigate(['login']);
  }

  searchBooks() {
    this.dataService.findByTitle(this.searchForm.get('search')?.value!)
    this.router.navigate(['catalog']);
  }

  getCatalog() {
    this.dataService.findAll();
    this.router.navigate(['catalog'])
  }

}
