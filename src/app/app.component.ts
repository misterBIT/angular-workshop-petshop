import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
      h1 {flex: 1;color:lightblue;}
      md-toolbar {align-content: space-between;}
      .logo {float:left;}
      img {width:50px;} 
  `],
  template: `
  <md-toolbar color="primary">
    <h1>
        <span class="logo">
        <img src="assets/pet/1.png"/>
        </span>
        {{title}}
    </h1>
    <span class="clock">
          <curr-time></curr-time>
    </span>
  </md-toolbar>
  <shop-front></shop-front>
  <pet-list></pet-list>
  <pet-input></pet-input>
  `,
})
export class AppComponent {
  title = 'Pet Shop';
}
