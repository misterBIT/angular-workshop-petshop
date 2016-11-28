import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <pet-input></pet-input>
  <pet-list></pet-list>
  `,
  styles: [`h1 {color:lightblue;}`]
})
export class AppComponent {
  title = 'Pet Shop';
}
