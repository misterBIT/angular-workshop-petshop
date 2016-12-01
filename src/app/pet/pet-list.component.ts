import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {FilterObject} from './pet.model';

@Component({
  selector: 'pet-list',
  styles: [`li {list-style: none; display:inline-block; margin: 10px; padding:5px; text-align:center; border: 1px solid #aaa; border-radius:4px;}`],
  template: `
    <section>
      <h2>Pet List</h2>
      <letter-selector  [letter]="filter.letter" (select)="changeFilterLetter($event)"></letter-selector>
      <div>
      Show:
      <label>All<input type="radio" name="awake" [checked]="filter.awake===null" [value]="null" (change)="changeAwakeFilter(null)"></label>    
      <label>Asleep<input type="radio" name="awake" [checked]="filter.awake===false" [value]="false" (change)="changeAwakeFilter(false)"></label>    
      <label>Awake<input type="radio" name="awake" [checked]="filter.awake===true" [value]="true" (change)="changeAwakeFilter(true)"></label>    
  </div>
      <ul>
        <li *ngFor="let currPet of petService.pets| petSearch:filter">
          <pet-renderer (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
  `
})
export class PetListComponent {

  filter: FilterObject = {
    letter: 'a',
    awake: null
  };

  constructor(private petService: PetService) {
  }

  changeFilterLetter(letter) {
    this.filter = Object.assign({}, this.filter, {letter});
  }

  changeAwakeFilter(awake) {
    this.filter = Object.assign({}, this.filter, {awake});
  }
}
