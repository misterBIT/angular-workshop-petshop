import {Component, Output, EventEmitter, Input} from '@angular/core';
import {FilterObject} from './pet.model';
declare type FilterObj = FilterObject; // silly hack to stop the TS compiler from complaining (a TS/webpack/ts-loader bug)

@Component({
  selector: 'pet-filter',
  styles: [`.awakeWrapper {    margin-left: 45px;}`],
  template: `
      <letter-selector  [letter]="filter.letter" (select)="changeFilterLetter($event)"></letter-selector>
      <div class="awakeWrapper">
        Show:
        <label>All<input type="radio" name="awake" [checked]="filter.awake===null" [value]="null" (change)="changeAwakeFilter(null)"></label>    
        <label>Asleep<input type="radio" name="awake" [checked]="filter.awake===false" [value]="false" (change)="changeAwakeFilter(false)"></label>    
        <label>Awake<input type="radio" name="awake" [checked]="filter.awake===true" [value]="true" (change)="changeAwakeFilter(true)"></label>
      </div>
  `
})


export class PetFilterComponent {
  @Output() filterChange = new EventEmitter<FilterObject>();
  @Input() filter: FilterObj = {
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
