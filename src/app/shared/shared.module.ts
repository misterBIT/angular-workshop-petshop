import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LetterSelectorComponent} from './letter-selector.component';
import {MaterialModule} from '@angular/material';

@NgModule({
  providers: [],
  declarations: [LetterSelectorComponent],
  imports: [CommonModule],
  exports: [MaterialModule, CommonModule, FormsModule, LetterSelectorComponent],
})
export class SharedModule {
}
