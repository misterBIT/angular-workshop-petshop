import {NgModule} from '@angular/core'
import {TimeComponent} from './time.component';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  providers: [],
  declarations: [TimeComponent],
  imports: [SharedModule],
  exports: [TimeComponent],
})
export class TimeModule {
}
