import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    <span class="logo">
    <img src="assets/pet/1.png"/>
    </span>
    {{title}}
  </h1>
  <pet-input></pet-input>
  <pet-list></pet-list>
  `,
  styles: [`
h1 {color:lightblue;}
.logo {float:left;}
img {width:50px;} `]
})
export class AppComponent {
  title = 'Pet Shop';
}
