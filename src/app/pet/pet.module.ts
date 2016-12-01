import {NgModule} from '@angular/core'
import {PetRendererComponent} from './pet-renderer.component';
import {PetListComponent} from './pet-list.component';
import {PetInputComponent} from './pet-input.component';
import {PetService} from './pet.service';
import {SharedModule} from '../shared/shared.module';
import {PetSearchPipe} from '../../assets/pet/pet-search.pipe';
import {TimeModule} from '../time/time.module';
import {PetFilterComponent} from './pets-filter.component';

@NgModule({
  providers: [PetService],
  declarations: [PetInputComponent, PetSearchPipe,PetFilterComponent,
    PetListComponent,
    PetRendererComponent],
  imports: [SharedModule,TimeModule],
  exports: [PetListComponent, PetInputComponent],
})
export class PetModule {
}
