import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'user-registration',
  template: `<form [formGroup]="userForm" novalidate (ngSubmit)="onSubmit()">
    <md-card>
        <md-card-title>Registration Form</md-card-title>
        <md-card-content>
            <md-input formControlName="username" placeholder="Username"></md-input>
            <md-input formControlName="password" placeholder="Password"></md-input>
        </md-card-content>
        <md-card-actions align="end">
            <button [disabled]="userForm.invalid" md-button color="primary" type="submit">SUBMIT</button>
        </md-card-actions>
    </md-card>
</form>`
})
export class UserRegistrationComponent {
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  userForm = this.fb.group({username: ['', Validators.required], password: ['', Validators.required]});

  onSubmit() {

    this.authService.register(this.userForm.value);
    this.router.navigateByUrl('/login');
  }
}
