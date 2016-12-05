import {Component}   from '@angular/core';
import {Router, NavigationExtras}      from '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  styles: [`md-card-content{margin-top:50px;}`],
  template: `
    <md-card>
        <md-card-header>
        <md-card-title><h2>LOGIN</h2></md-card-title>
        <md-card-subtitle><p>{{message}}</p></md-card-subtitle>
      </md-card-header>
    <md-card-content>
    <div>
      <form *ngIf="!authService.isLoggedIn">
        <md-input name="username" [(ngModel)]="username" placeholder="Username"></md-input>
        <md-input name="password" [(ngModel)]="password" placeholder="Password"></md-input>
      </form>
    </div>
    <p>
      <button md-raised-button color="warn" (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button md-raised-button color="warn" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
    </md-card-content>
</md-card>
`
})
export class LoginComponent {
  message: string;

  username = '';
  password = '';

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        // Redirect the user but keep params
        // 				let navigationExtras: NavigationExtras = {
        // 					preserveQueryParams: true,
        // 					preserveFragment: true
        // 				};
        //
        // 				this.router.navigate([redirect], navigationExtras);
        this.router.navigate([redirect]);
      }
      else {
        this.message = 'Login Failed!';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

