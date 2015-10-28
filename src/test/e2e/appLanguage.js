describe('App: language', function () {
  var url = 'http://wake-me-up.co/staging/#/';
  var header = element(by.css('.navbar-header'));
  var languageBtn = element(by.css('.navbar-right .dropdown a'));
  var languageEnglishBtn = element(by.css('.dropdown-menu li a'));

  var scrollIntoView = function (element) {
    //document.querySelector('.adsp-footerads').style.display = 'none'; //hide ad, because it might cause test failure
    arguments[0].scrollIntoView();
  };


  it('should be English when /#/en', function () {
    browser.get(url + 'en');
    expect(header.getText()).toMatch('alarm clock');
  });

  it('should be French when /#/fr', function () {
    browser.get(url + 'fr');
    expect(header.getText()).toMatch('réveil en ligne');
  });

  it('should be Spanish when /#/es', function () {
    browser.get(url + 'es');
    expect(header.getText()).toMatch('Despertador');
  });


  it('should be Spanish when /#/ru', function () {
    browser.get(url + 'ru');
    expect(header.getText()).toMatch('который');
  });

  it('should be Spanish when /#/pt', function () {
    browser.get(url + 'pt');
    expect(header.getText()).toMatch('despertador');
  });

  it('should be Spanish when /#/it', function () {
    browser.get(url + 'it');
    expect(header.getText()).toMatch('sveglia');
  });

  it('should be Spanish when /#/de', function () {
    browser.get(url + 'de');
    expect(header.getText()).toMatch('Surfern');
  });


  it('should be change the language when clicking on "Language" -> "English"', function () {
    browser.executeScript(scrollIntoView, languageBtn.getWebElement());
    languageBtn.click();
    languageEnglishBtn.click();
    expect(header.getText()).toMatch('alarm clock');
  });
});