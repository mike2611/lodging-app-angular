import { Injectable } from '@angular/core';
import { Room } from '../room';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = environment.API_BASE_URL;

  rooms$ = this.getAllRooms();

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/rooms`);
  }
}
