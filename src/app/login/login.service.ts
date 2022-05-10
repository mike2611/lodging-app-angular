import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../token';
import { BehaviorSubject, ignoreElements, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.API_BASE_URL;
  private loggedIn = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedIn.asObservable();
  private _authToken: string | null = null;
  public get authToken(): string | null {
    return this._authToken;
  }

  constructor(private http: HttpClient, private router: Router) { }

  logIn(name: string): Observable<never> {
    return this.http.post<Token>(`${this.baseUrl}/login`, { name }).pipe(
      tap((token: Token) => this.handleSuccesfullLogin(token)),
      ignoreElements(),
    )
  }

  logOut(): void {
    this.loggedIn.next(false);
    this._authToken = null;
  }

  private handleSuccesfullLogin(token: Token): void {
    this.loggedIn.next(true);
    this._authToken = token.auth_token;
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['/']);
  }

}
