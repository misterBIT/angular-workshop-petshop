import {Component, Output, EventEmitter, Input} from '@angular/core';
import {PetService} from './pet.service';
import {FilterObject} from './pet.model';

@Component({
  selector: 'pet-filter',
  styles: [],
  template: `
      <letter-selector  [letter]="filter.letter" (select)="changeFilterLetter($event)"></letter-selector>
      <div>
        Show:
        <label>All<input type="radio" name="awake" [checked]="filter.awake===null" [value]="null" (change)="changeAwakeFilter(null)"></label>    
        <label>Asleep<input type="radio" name="awake" [checked]="filter.awake===false" [value]="false" (change)="changeAwakeFilter(false)"></label>    
        <label>Awake<input type="radio" name="awake" [checked]="filter.awake===true" [value]="true" (change)="changeAwakeFilter(true)"></label>
      </div>
  `
})
export class PetFilterComponent {

  @Output() filterChange = new EventEmitter<FilterObject>();
  @Input() filter: FilterObject = {
    letter: 'a',
    awake: null
  };

  changeFilterLetter(letter) {
    this.filter = Object.assign({}, this.filter, {letter});
    this.filterChange.emit(this.filter);
  }

  changeAwakeFilter(awake) {
    this.filter = Object.assign({}, this.filter, {awake});
    this.filterChange.emit(this.filter);
  }
}
