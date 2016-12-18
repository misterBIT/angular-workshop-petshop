import {Component, trigger, style, animate, transition, state} from '@angular/core';
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
          <pet-renderer (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
  `
  ,
  animations: [trigger('flyInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(100, style({transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])])]
})
export class PetListComponent {
  filter: FilterObject = {
    letter: 'a',
    awake: null
  };

  constructor(private petService: PetService) {
  }
}
