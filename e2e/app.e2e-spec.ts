import { MarcswilsonPage } from './app.po';

describe('marcswilson App', () => {
  let page: MarcswilsonPage;

  beforeEach(() => {
    page = new MarcswilsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
