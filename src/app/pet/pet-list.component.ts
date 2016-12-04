import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {FilterObject} from './pet.model';

@Component({
  selector: 'pet-list',
  styles: [`li {list-style: none; display:inline-block; margin: 10px; padding:5px; text-align:center; border: 1px solid #aaa; border-radius:4px;}`],
  template: `
    <section>
      <h2>Pet List</h2>
      <pet-filter (filterChange)="filter = $event" ></pet-filter>
      <ul>
        <li *ngFor="let currPet of petService.pets| petSearch:filter">
          <pet-renderer (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
    <pet-input></pet-input>
  `
})
export class PetListComponent {
  filter: FilterObject = {
    letter: 'a',
    awake: null
  };

  constructor(private petService: PetService) {
  }
}
