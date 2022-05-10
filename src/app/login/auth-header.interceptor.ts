import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.loginService.authToken;

    if (authToken === null || this.isThirdPartyRequest(request.url)) {
      console.log('No auth token found, skipping auth header');
      return next.handle(request);
    }

    const requestWithHeader = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    })

    console.log(`Adding auth header ${authToken}`);

    return next.handle(requestWithHeader);
  }

  private isThirdPartyRequest(url: string): boolean {
    return url.startsWith(environment.API_BASE_URL) === false;
  }
}
