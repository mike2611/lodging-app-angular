import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { Token } from '../token';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
  });


  constructor(private signUpService: SignUpService) { }

  signUp() {
    const credentials = this.signUpForm.value;
    this.signUpService.signUp(credentials).subscribe();
  }
}
