import { Component, OnInit } from '@angular/core';
import { Room } from '../room'
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms$ = this.homeService.rooms$;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
