describe('App: language', function () {
    var header = element(by.css('.navbar-header'));

    it('should be English when /#/en', function () {
      browser.get('http://localhost:8080/#/en');
      expect(header.getText()).toMatch('alarm clock!');
    });

    it('should be French when /#/fr', function () {
      browser.get('http://localhost:8080/#/fr');
      expect(header.getText()).toMatch('réveil en ligne');
    });
});