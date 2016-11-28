import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {PetInputComponent} from './pet/pet-input.component';
import {PetService} from './pet/pet.service';
import {PetListComponent} from './pet/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PetInputComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // notice that this must be included for ngModel to work
    HttpModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
