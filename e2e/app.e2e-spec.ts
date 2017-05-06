import { ZonaPage } from './app.po';

describe('zona App', function() {
  let page: ZonaPage;

  beforeEach(() => {
    page = new ZonaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
