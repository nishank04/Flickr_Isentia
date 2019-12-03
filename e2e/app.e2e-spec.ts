import { NgFlickrPage } from './app.po';

describe('ng-flickr App', () => {
  let page: NgFlickrPage;

  beforeEach(() => {
    page = new NgFlickrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
