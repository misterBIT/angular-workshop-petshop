import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <span style="float: right" >
        <curr-time></curr-time>
  </span>
  <h1>
    <span class="logo">
    <img src="assets/pet/1.png"/>
    </span>
    {{title}}
  </h1>
  <shop-front></shop-front>
  <pet-list></pet-list>
  <pet-input></pet-input>
  `,
  styles: [`
h1 {color:lightblue;}
.logo {float:left;}
img {width:50px;} `]
})
export class AppComponent {
  title = 'Pet Shop';
}
