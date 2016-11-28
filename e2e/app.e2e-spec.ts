import { AngularWorkshopPetshopPage } from './app.po';

describe('angular-workshop-petshop App', function() {
  let page: AngularWorkshopPetshopPage;

  beforeEach(() => {
    page = new AngularWorkshopPetshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
