describe('Controller: ChronoCtrl', function () {
  //Go to HP with english language, not using beforeEach to accelerate tests execution
  browser.get('http://wake-me-up.co/staging/#/en#chrono');
  //browser.get('http://localhost:8080/#/en#chrono');

  var scrollIntoView = function (element) {
    arguments[0].scrollIntoView();
  };

  var timerCtrlBtn = element(by.id('timerCtrl'));
  var clearBtn = element(by.id('clearBtn'));
  var lapBtn = element(by.id('lapBtn'));
  var lapTableContent = element.all(by.id('lapsData td'));
  var timer = element(by.css('#chrono timer h3'));

  beforeEach(function() {
    browser.executeScript(scrollIntoView, timerCtrlBtn.getWebElement());
  });

  it('should activate the chronometrer when clicking on the start button', function () {
    timerCtrlBtn.click();
    browser.sleep(1000);
    expect(timer.getText()).toMatch('1 second');
  });

  it('should desactivate the chronometrer when clicking on the pause button', function () {
    timerCtrlBtn.click();
    browser.sleep(1000);
    expect(timer.getText()).toMatch('1 second');
  });

  it('should register lap when clicking on the lap button', function () {
    timerCtrlBtn.click();
    browser.sleep(1000);
    lapBtn.click();
    expect(element.all(by.repeater('time in times')).count()).toEqual(1);
    expect(lapTableContent.first().getText()).toMatch('1');
    expect(lapTableContent.get(1).getText()).toMatch('2 second');
  });

  it('should remove lap registered and remove the timer when clicking on clear', function () {
    clearBtn.click();

    expect(lapTableContent.count()).toBe(0);
    expect(timer.getText()).toMatch('');
  });
});