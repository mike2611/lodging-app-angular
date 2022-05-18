import { Component } from '@angular/core';
import { ReservationsService } from './reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  reservations$ = this.reservationService.reservations$;

  constructor(private reservationService: ReservationsService) { }

}
