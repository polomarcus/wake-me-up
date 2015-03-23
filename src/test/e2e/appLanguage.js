describe('App: language', function () {
    var header = element(by.css('.navbar-header'));

    it('should be English when /#/en', function () {
       browser.get('http://wake-me-up.co/staging/#/en');
       expect(header.getText()).toMatch('alarm clock!');
    });

    it('should be French when /#/fr', function () {
       browser.get('http://wake-me-up.co/staging/#/fr');
       expect(header.getText()).toMatch('réveil en ligne');
    });
});