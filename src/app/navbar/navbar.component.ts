import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links = ['signup', 'login', 'home', 'reservations', 'contact'];

  constructor() { }

}
