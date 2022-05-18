import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  rooms$ = this.homeService.rooms$;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  navigateToRoomDetails(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
