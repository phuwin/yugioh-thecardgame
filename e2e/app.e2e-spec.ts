import { YugiohPage } from './app.po';

describe('yugioh App', () => {
  let page: YugiohPage;

  beforeEach(() => {
    page = new YugiohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
