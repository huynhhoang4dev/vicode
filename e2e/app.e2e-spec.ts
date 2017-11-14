import { SmallErpPage } from './app.po';

describe('small-erp App', () => {
  let page: SmallErpPage;

  beforeEach(() => {
    page = new SmallErpPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
