import { LacoTodoPage } from './app.po';

describe('laco-todo App', function() {
  let page: LacoTodoPage;

  beforeEach(() => {
    page = new LacoTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
