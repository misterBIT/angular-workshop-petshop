import {Component, trigger, style, animate, transition, state, keyframes} from '@angular/core';
import {PetService} from './pet.service';
import {FilterObject} from './pet.model';

@Component({
  selector: 'pet-list',
  styles: [`li {list-style: none; display:inline-block; margin: 10px; padding:5px; text-align:center; border: 1px solid #aaa; border-radius:4px;}`],
  template: `
    <pet-input></pet-input>
    <section>
      <h2>Pet List</h2>
      <pet-filter (filterChange)="filter = $event" ></pet-filter>
      <ul>
        <li @flyInOut *ngFor="let currPet of petService.pets| petSearch:filter">
          <pet-renderer style="display: block" [@petBounce]="currPet.awake.toString()" (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
  `
  ,
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100, style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])]),
    trigger('petBounce', [
      state('true', style({transform: 'rotate(0)', opacity: 1})),
      state('false', style({transform: 'rotate(0)', opacity: 0.5})),
      transition('true <=> false', [
        animate(200, keyframes([
          style({transform: 'rotate(0)'}),
          style({transform: 'rotate(10deg)'}),
          style({transform: 'rotate(0)'}),
          style({transform: 'rotate(-10deg)'}),
          style({transform: 'rotate(0deg)'})
        ]))
      ])
    ])]
})
export class PetListComponent {
  filter: FilterObject = {
    letter: 'a',
    awake: null
  };

  constructor(private petService: PetService) {
  }
}
