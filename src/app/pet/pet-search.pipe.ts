import {Pipe, PipeTransform} from '@angular/core';
import {PetModel, FilterObject} from './pet.model';
@Pipe({name: 'petSearch'})
export class PetSearchPipe implements PipeTransform {
  transform(pets: PetModel[], {letter, awake}:FilterObject): any {
    return pets.filter((p) =>
      p.name.toLowerCase().startsWith(letter.toLowerCase()) &&
      (awake === null || p.awake === awake)
    );
  }

}
