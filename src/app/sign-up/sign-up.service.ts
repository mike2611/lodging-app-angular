import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { Token } from '../token';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/signup`, user);
  }

}
