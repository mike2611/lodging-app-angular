import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.loginService.loggedIn$.pipe(
      map((loggedIn: boolean) => loggedIn ? true : this.router.parseUrl('/login'))
    );
  }

}
