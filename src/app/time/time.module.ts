import {NgModule} from '@angular/core'
import {TimeComponent} from './time.component';
import {SharedModule} from '../shared/shared.module';
import {CountdownComponent} from './countdown.component';
@NgModule({
  providers: [],
  declarations: [TimeComponent,CountdownComponent],
  imports: [SharedModule],
  exports: [TimeComponent,CountdownComponent],
})
export class TimeModule {
}
