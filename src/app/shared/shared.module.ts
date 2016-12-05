import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LetterSelectorComponent} from './letter-selector.component';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  providers: [],
  declarations: [LetterSelectorComponent],
  imports: [CommonModule],
  exports: [MaterialModule, RouterModule, CommonModule, FormsModule, ReactiveFormsModule, LetterSelectorComponent],
})
export class SharedModule {
}
