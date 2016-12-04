import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PetModule} from './pet/pet.module';
import {TimeModule} from './time/time.module';
import {ShopModule} from './shop/shop.module';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PetModule,
    TimeModule,
    HttpModule,
    ShopModule,
    BrowserModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
