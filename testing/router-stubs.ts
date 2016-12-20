import {Input, Directive} from '@angular/core';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: boolean = false;

  onClick() {
    this.navigatedTo = true;
  }
}
