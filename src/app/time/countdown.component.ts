import {Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'countdown',
  template: ` <div id="clock" *ngIf="inputTime">
                <div> {{ minRemaining|number:'2.0-0'}} : {{secRemaining|number:'2.0-0'}} </div>
              </div> `
})

export class CountdownComponent implements OnInit,OnDestroy,OnChanges {

  @Input('to') inputTime: number;
  @Output() due = new EventEmitter();
  private timeLeft: number = 0;

  private countDownInterval: any;

  get minRemaining() {
    if (this.timeLeft <= 0) return 0;
    else {
      return Math.abs(Math.floor(this.timeLeft / 1000 / 60));
    }
  }

  get secRemaining() {
    if (this.timeLeft <= 0) return 0;
    return Math.abs(Math.floor(this.timeLeft) / 1000);
  }

  private calcTimeRemaing() {
    this.timeLeft = this.inputTime - Date.now();
  }

  countDown() {
    this.countDownInterval = setInterval(() => {
      this.calcTimeRemaing();
      if (this.timeLeft <= 0) {
        clearInterval(this.countDownInterval);
        this.due.emit({});
      }
    }, 1000);
  }

  ngOnInit() {
    this.countDown();
  }

  ngOnChanges(changes) {
    if (changes.inputTime) {
      if (this.countDownInterval) {
        clearInterval(this.countDownInterval);
        this.countDown();
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.countDownInterval);
  }
}
