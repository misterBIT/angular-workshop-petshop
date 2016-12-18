import {PetService} from "./pet.service";
import {PetModel} from "./pet.model";
describe('test petsService', () => {
  let petService: PetService;
  beforeEach(() => {
    petService = new PetService();
  });

  describe('addPet method', () => {
    it('checks it changes the length of the pets array', () => {
      let originalLength = petService.pets.length;
      petService.addPet(new PetModel('demo'));
      let newLength = petService.pets.length;
      expect(newLength).toEqual(originalLength + 1);
      expect(newLength).toBeGreaterThan(originalLength);
    });


    it('checks pets array has a differen reference after add', () => {
      let original = petService.pets;
      petService.addPet(new PetModel('demo'));
      let newArray = petService.pets;
      expect(newArray != original).toBeTruthy()
    });
  });
});
