import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private loginService: LoginService) { }

  signIn() {
    const credentials = this.name.value;
    this.loginService.logIn(credentials).subscribe();
  }
}
