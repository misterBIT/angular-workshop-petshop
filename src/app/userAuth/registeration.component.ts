import {Component} from '@angular/core';

@Component({
  selector: 'user-registration',
  template: `
    <form novalidate>
    <md-card>
        <md-card-title>Registration Form</md-card-title>
        <md-card-content>
            <md-input placeholder="Username"></md-input>
            <md-input placeholder="Password"></md-input>
        </md-card-content>
        <md-card-actions align="end">
            <button md-button color="primary" type="submit">SUBMIT</button>
        </md-card-actions>
    </md-card>
</form>`
})
export class UserRegistrationComponent {

}
