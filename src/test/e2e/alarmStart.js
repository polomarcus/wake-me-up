describe('Controller: AlarmCtrl', function () {
    var url = 'http://localhost:8080/#/';
    //INIT
    //Go to HP with english language
    browser.get(url + 'en#chrono');

    var scrollIntoView = function (element) {
      arguments[0].scrollIntoView();
    };

    var hourInput = element(by.model('alarm.time.hour'));
    var minuteInput = element(by.model('alarm.time.min'));
    var urlInput = element(by.model('alarm.url'));
    var latestResult = element(by.binding('latest'));
    var countdownAlarm = element(by.css('#countdown timer p'));
    var progressBar = element(by.css('#countdown .progress-bar'));
    var alarmPanel = element(by.css('alarm .panel-body .marketing'));
    var activateBtn = element(by.id('activateBtn'));
    var offBtn = element(by.id('offBtn'));
    var testBtn = element(by.id('testBtn'));
    var ytBtn = element(by.id('youtube1'));
    var dailymotionBtn = element(by.id('dailymotion1'));
    var soundcloudBtn = element(by.id('soundcloud1'));
    var mixcloudBtn = element(by.id('Mixcloud1'));
    var deezerBtn = element(by.id('deezer1'));
    var twitchURL = "https://www.twitch.tv/spamfish";

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

    describe('Services intergration: AlarmCtrl', function () {

      beforeEach(function() {
        hourInput.clear();
        minuteInput.clear();
        urlInput.clear();
        browser.executeScript(scrollIntoView, alarmPanel.getWebElement());
      });

      it('should launch a the link in an iframe https://github.com/polomarcus/reveil-en-ligne when the alarm rings', function () {
        var date = new Date();
        var sleepTime = 60 - date.getSeconds() + 3; //5 is margin
        var minute = date.getMinutes();
        var hour = date.getHours();

        //Set values for minute hour and url
        hourInput.sendKeys(hour);
        minuteInput.sendKeys(minute + 1);
        urlInput.sendKeys('https://github.com/polomarcus/reveil-en-ligne');

        //Activate alarm button click
        activateBtn.click();

        browser.sleep(1000);

        expect(countdownAlarm.getText()).toMatch('second');
        expect(progressBar.getText()).toMatch('%');
        expect(progressBar.getAttribute('class')).toMatch('active');

        browser.sleep(sleepTime * 1000);

        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();

        //reinit state
        offBtn.click();
      });

      it('should launch a the SoundCloud link in an iframe when the alarm rings', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        soundcloudBtn.click();
        expect(urlInput.getAttribute('value')).toMatch('soundcloud');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(1000);
        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();

        //reinit state
        offBtn.click();
      });

      it('should launch a the MixCloud link in an iframe when the alarm rings', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        mixcloudBtn.click();
        expect(urlInput.getAttribute('value')).toMatch('mixcloud');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(1000);
        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();

        //reinit state
        offBtn.click();
      });

      it('should launch a the Dailymotion link in an iframe when the alarm rings', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        dailymotionBtn.click();
        expect(urlInput.getAttribute('value')).toMatch('dailymotion');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(1000);
        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();

        //reinit state
        offBtn.click();
      });


      it('should launch a the Deezer link in an iframe when the alarm rings', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        deezerBtn.click();
        expect(urlInput.getAttribute('value')).toMatch('deezer');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(1000);
        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();

        //reinit state
        offBtn.click();
      });
/*
      it('should launch a the link in an iframe Youtube when the test btn is clicked', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        ytBtn.click();
        expect(urlInput.getAttribute('value')).toMatch('youtube');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(2000);
        expect(element(by.css('#url2play object')).isPresent()).toBeTruthy();

         //reinit state
         offBtn.click();
      });*/

     /* it('should launch the Twitch link in an iframe with embed at the end when the test btn is clicked', function () {
        //Set values for minute hour and url
        hourInput.sendKeys(1);
        minuteInput.sendKeys(30);
        //Set twitch URL
        urlInput.sendKeys(twitchURL);

        expect(urlInput.getAttribute('value')).toMatch('twitch');

        //Activate alarm button click
        testBtn.click();
        browser.sleep(3000);
        expect(element(by.css('#url2play iframe')).isPresent()).toBeTruthy();
        expect(element(by.css('#url2play iframe')).getAttribute('src')).toMatch('embed');

          //reinit state
          offBtn.click();
      });*/
    });
});