import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {
  static baseUrl = 'http://localhost:3003/data/users';
  isLoggedIn: boolean = false;

  constructor(private http: Http) {
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username, password) {
    return this.http.get(AuthService.baseUrl)
      .map(res => res.json())
      .map((usersList) => {
        return Boolean(usersList.find((user) => user.username === username && user.password === password));
      })
      .do(val => this.isLoggedIn = val);
  }

  register(user) {
    return this.http.post(AuthService.baseUrl, user).toPromise();
  }

  logout() {
    this.isLoggedIn = false;
  }
}
