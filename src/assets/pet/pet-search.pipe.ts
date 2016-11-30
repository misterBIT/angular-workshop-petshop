import {Pipe, PipeTransform} from '@angular/core';
import {PetModel} from '../../app/pet/pet.model';
@Pipe({name: 'petSearch',pure:false})
export class PetSearchPipe implements PipeTransform {
  transform(pets: PetModel[], letter): any {
    return pets.filter((p) => p.name.toLowerCase().startsWith(letter.toLowerCase()));
  }

}
