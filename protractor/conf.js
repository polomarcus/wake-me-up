/* protractor-local.conf.js */
exports.config =  {
    allScriptsTimeout: 11000,
    specs: ['../src/test/e2e/*.js'],
    baseUrl: 'http://localhost:4444/wd/hub',
    maxSessions: 1,
    multiCapabilities: [{ //You can add several browsers here
        'browserName': 'chrome'
    }
    ],
    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 100000 //Max 1min and 40 sec
    }
};