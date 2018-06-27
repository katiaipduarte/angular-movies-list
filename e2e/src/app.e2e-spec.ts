import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app main title', () => {
    page.navigateTo();
    expect(page.getAppMainTitleText()).toEqual('Movies List App'.toUpperCase());
  });

  it('should display list title', () => {
    page.navigateTo();
    expect(page.getListTitleText()).toEqual('Movies List'.toUpperCase());
  });

  it('should display list with 3 movies', () => {
    page.navigateTo();
    expect(page.getListMovies()).toEqual(3);
  });

  it('should display list order by Total cost (low to high)', () => {
    page.navigateTo();
    expect(page.getListOrderCurrentValue()).toEqual('ASC');
  });

  it('should display 3 movies and after create a movie display 4', () => {
    page.navigateTo();
     // show 3 movies
    expect(page.getListMovies()).toEqual(3);
    // validate clear form
    expect(page.getFormTitle()).toEqual('');
    expect(page.getFormCategory()).toEqual('');
    expect(page.getFormActorName()).toEqual('');
    expect(page.getFormActorSalary()).toEqual('');
    expect(page.getFormSubmitBtn()).toEqual('true');

    // fill form
    expect(page.setFormTitle()).toEqual('movie');
    expect(page.setFormCategory()).toEqual('action');
    expect(page.getFormSubmitBtn()).toEqual('true');
    expect(page.setFormActorName()).toEqual('actor1');
    expect(page.setFormActorSalary()).toEqual('10000');
    expect(page.getFormSubmitBtn()).toEqual(null);
    page.clickFormSubmitBtn();
    // show 4 movies
    expect(page.getListMovies()).toEqual(4);
  });
});
