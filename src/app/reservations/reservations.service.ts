import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  baseUrl = environment.API_BASE_URL;

  reservations$ = this.getReservations();

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }
}
