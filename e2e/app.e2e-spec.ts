import {AngularWorkshopHomePage, waitForUrlToChangeTo} from './app.po';
import {browser} from 'protractor';

describe('angular-workshop-petshop App', function () {
  let page: AngularWorkshopHomePage;

  beforeEach(() => {
    page = new AngularWorkshopHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Pet Shop');
  });

  it('should move to login page when clicking the toolbar link', () => {
    page.navigateTo();
    let login = page.getLoginLink();
    login.click();
    browser.wait(waitForUrlToChangeTo(/\/login/));
  });
});
