import {browser, element, by} from 'protractor';

export class AngularWorkshopHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getLoginLink() {
    return element(by.css("[routerlink='login']"));
  }


  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

export function waitForUrlToChangeTo(urlRegex) {
  let currentUrl;

  return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
      currentUrl = url;
    }
  ).then(function waitForUrlToChangeTo() {
      return browser.wait(function waitForUrlToChangeTo() {
        return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
          return urlRegex.test(url);
        });
      });
    }
  );
}
