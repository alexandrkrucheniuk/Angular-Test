import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'To do list';

  loggedIn:boolean = false;

  constructor() {}

  signOut(): void {
    localStorage.removeItem('email');
    location.reload();
  }

  ngOnInit(): void {
    this.loggedIn = (localStorage.getItem('email') != null);
  }

}
