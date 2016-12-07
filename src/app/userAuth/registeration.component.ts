import {Component} from '@angular/core';
import {FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {userFieldsValidationSchema} from './user.model';
function validatePasswordRetype(c: AbstractControl) {
  debugger;
}
@Component({
  selector: 'user-registration',
  template: `<form [formGroup]="userForm" novalidate (ngSubmit)="onSubmit()">
    <md-card>
        <md-card-title>Registration Form</md-card-title>
        <md-card-content>
            <md-input formControlName="username" placeholder="Username"></md-input>
            <md-input formControlName="password" placeholder="Password"></md-input>
            <md-input formControlName="repeat_password" placeholder="Retype Password"></md-input>
            <md-divider></md-divider>
            <div formGroupName="address">
              <h3>Address</h3>
              <md-input formControlName="street" placeholder="Street"></md-input>
              <md-input formControlName="city" placeholder="City"></md-input>
              <md-input [dividerColor]="isInvalid('address.zip') ? 'warn' :'primary'" formControlName="zip"  placeholder="zip">
              <md-hint align="start" *ngIf="hasError('address.zip','pattern')">Must Be 5-7 digits only</md-hint>
</md-input>
              
            </div>
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

  hasError(controlPath: string, errorName: string) {
    return this.userForm.get(controlPath).touched && this.userForm.get(controlPath).hasError(errorName);
  }

  isInvalid(controlPath) {
    let control = this.userForm.get(controlPath);
    return control.touched && control.status === 'INVALID';
  }

  userForm = this.fb.group({
    username: ['', userFieldsValidationSchema.username],
    password: ['', userFieldsValidationSchema.password],
    repeat_password: ['', userFieldsValidationSchema.repeatPassword],
    address: this.fb.group({
      street: ['', userFieldsValidationSchema.address_street],
      city: ['', userFieldsValidationSchema.address_city],
      zip: ['', userFieldsValidationSchema.address_zip]
    })
  }, {password: validatePasswordRetype});

  onSubmit() {

    this.authService.register(this.userForm.value);
    this.router.navigateByUrl('/login');
  }
}
