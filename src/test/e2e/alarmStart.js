describe('Controller: AlarmCtrl', function () {
    //INIT
    //Go to HP with english language
    browser.get('http://localhost:8080/#/en');

    var hourInput = element(by.model('alarm.time.hour'));
    var minuteInput = element(by.model('alarm.time.min'));
    var urlInput = element(by.model('alarm.url'));
    var latestResult = element(by.binding('latest'));
    var activateBtn = element(by.id('activateBtn'));
    var offBtn = element(by.id('offBtn'));


    beforeEach(function() {
        hourInput.clear();
        minuteInput.clear();
        urlInput.clear();
    });

    it('should display an error message - unvalid time', function () {
        //Set hour value
        hourInput.sendKeys(24);

        expect(element(by.id('timeValidError')).getText()).toMatch("hour is not valid");

        //Set minute value
        minuteInput.sendKeys(61);

        expect(element(by.id('timeValidError')).getText()).toMatch("minute is not valid");
    });

    it('should display an error message - unvalid url', function () {
        //Set hour value
        urlInput.sendKeys('NOT A URL');

        expect(element(by.id('urlValidError')).getText()).toMatch("URL is not valid");

        //Testing empty value
        urlInput.clear();

        expect(element(by.id('urlValidError')).getText()).toMatch("URL is not valid");
    });

    it('should activate the alarm at 7:00 with https://github.com/polomarcus/reveil-en-ligne as URL', function () {

        //Set values for minute hour and url
        hourInput.sendKeys(7);
        minuteInput.sendKeys(0);
        urlInput.sendKeys('https://github.com/polomarcus/reveil-en-ligne');

        //Activate alarm button click
        activateBtn.click();

        expect(element(by.css('#countdown p')).getText()).toMatch("The alarm will ring");


        //reinit state
        offBtn.click();
    });
});