import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppMainTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getListTitleText() {
    return element(by.css('app-movies h2')).getText();
  }

  getListMovies() {
    return element.all(by.css('#movies li')).count();
  }

  getListOrderCurrentValue() {
    return element(by.id('orderBy')).getAttribute('value');
  }

  getFormTitle() {
    return element(by.id('name')).getAttribute('value');
  }

  getFormCategory() {
    return element(by.id('category')).getAttribute('value');
  }

  getFormActorName() {
    return element(by.id('actorName')).getAttribute('value');
  }

  getFormActorSalary() {
    return element(by.id('salary')).getAttribute('value');
  }

  setFormTitle() {
    element(by.id('name')).sendKeys('movie');
    return this.getFormTitle();
  }

  setFormCategory() {
    element(by.id('category')).click().then( () => {
      element(by.id('category')).all(by.tagName('option')).get(0).click();
    });
    return this.getFormCategory();
  }

  setFormActorName() {
    element(by.id('actorName')).sendKeys('actor1');
    return this.getFormActorName();
  }

  setFormActorSalary() {
    element(by.id('salary')).sendKeys('10000');
    return this.getFormActorSalary();
  }

  getFormSubmitBtn() {
    return element(by.tagName('button')).getAttribute('disabled');
  }

  clickFormSubmitBtn() {
    element(by.tagName('button')).click();
  }
}
