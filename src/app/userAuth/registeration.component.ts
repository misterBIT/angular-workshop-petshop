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
  template: `<form novalidate>
    <md-card>
        <md-card-title>Registration Form</md-card-title>
        <md-card-content>
            <md-input placeholder="Username"></md-input>
            <md-input placeholder="Password"></md-input>
            <md-input placeholder="Retype Password"></md-input>
            <md-divider></md-divider>
            <div >
              <h3>Address</h3>
              <md-input placeholder="Street"></md-input>
              <md-input placeholder="City"></md-input>
              <md-input  placeholder="zip"></md-input>
            </div>
        </md-card-content>
        <md-card-actions align="end">
            <button md-button color="primary" type="submit">SUBMIT</button>
        </md-card-actions>
    </md-card>
</form>`
})
export class UserRegistrationComponent {

}
