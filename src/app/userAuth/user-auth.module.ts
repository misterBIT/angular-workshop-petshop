import {NgModule} from '@angular/core'
import {LoginComponent} from './login.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  providers: [AuthGuard, AuthService],
  declarations: [LoginComponent],
  imports: [SharedModule],
  exports: [LoginComponent],
})
export class UserAuthModule {
}
