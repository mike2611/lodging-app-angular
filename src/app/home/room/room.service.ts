import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Room } from '../.././room';
import { ReservationDates } from './reservation-dates';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/rooms/${id}`);
  }

  reserveRoom(id: number, reservationDates: ReservationDates): Observable<void> {
    const reservationData = { room_id: id, ...reservationDates };
    return this.http.post<void>(`${this.baseUrl}/reservations`, reservationData);
  }

}
