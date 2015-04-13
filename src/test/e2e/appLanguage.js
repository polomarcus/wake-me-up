describe('App: language', function () {
  var url = 'http://wake-me-up.co/staging/#/';
  var header = element(by.css('.navbar-header'));
  var languageBtn = element(by.css('.navbar-right .dropdown a'));
  var languageEnglishBtn = element(by.css('.dropdown-menu li a'));

  it('should be English when /#/en', function () {
    browser.get(url + 'en');
    expect(header.getText()).toMatch('alarm clock');
  });

  it('should be French when /#/fr', function () {
    browser.get(url + 'fr');
    expect(header.getText()).toMatch('réveil en ligne');
  });

  it('should be change the language when clicking on "Language" -> "English"', function () {
    languageBtn.click();
    languageEnglishBtn.click();
    expect(header.getText()).toMatch('alarm clock');
  });
});