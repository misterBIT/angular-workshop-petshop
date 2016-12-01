import {Component, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {PetModel} from './pet.model';
@Component({
  encapsulation: ViewEncapsulation.Emulated, // switch to .Native and.None to see the difference
  selector: 'pet-renderer',
  styles: [`img {max-height:100px;}
.awake {color:orange}`],
  template: `
          <div class="pet-renderer">
           <input type="checkbox" [checked]="pet.awake" (change)="petAwakeToggle()">
            <span [class.awake]="pet.awake" class="petName">{{pet.name}}</span>
            <img [src]="pet.imgUrl"/>
            <div><small>Time till asleep</small><countdown [to]="pet.nextFeedAt" (due)="petAwakeToggle()"></countdown></div>
            <button (click)="feedPet()">Feed</button>
          </div>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;
  @Output() awakeChange = new EventEmitter();
  @Output() feed = new EventEmitter();

  petAwakeToggle() {
    this.awakeChange.emit()
  }

  feedPet() {
    this.feed.emit(this.pet)
  }

}
