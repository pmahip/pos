import { PhotographyPage } from './app.po';

describe('photography App', () => {
  let page: PhotographyPage;

  beforeEach(() => {
    page = new PhotographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
