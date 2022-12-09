import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import labels from 'src/assets/json/labels.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  labels: any = labels;

  login() {
      this.router.navigate(['login'])
  }
}
