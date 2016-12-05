import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
      h1 {flex: 1;color:lightblue;}
      h1 button { vertical-align: text-top;}
      md-toolbar {align-content: space-between;}
      .md-list-item a {
              color: #1dffab;
      }
      .right {
          display: flex;
      }
      .right .loginLink {
          flex: 1;
          margin: 0 20px;
      }
      .md-list-item a.active {
            text-decoration: underline;
            color: #ff3f64;
      }
      img {width:50px;} 
  `],
  template: `
<md-sidenav-layout>
  <md-toolbar color="primary">
    <h1>
        <button md-icon-button (click)="sideNav.toggle()"><md-icon>reorder</md-icon></button>
        <img src="assets/pet/1.png"/>
        {{title}}
    </h1>
    <span class="right">
          <button class="loginLink" md-raised-button color="warn" routerLink="login">Login</button>
          <curr-time></curr-time>
    </span>
  </md-toolbar>
  <router-outlet></router-outlet>
  <md-sidenav #sideNav>
  <md-list (click)="sideNav.close()">
    <md-list-item><a routerLinkActive="active" routerLink="pets">Pets</a></md-list-item> 
    <md-list-item><a routerLinkActive="active" routerLink="shop">Shop</a></md-list-item>
  </md-list>
  </md-sidenav>
 </md-sidenav-layout>
  `,
})
export class AppComponent {
  title = 'Pet Shop';
}
