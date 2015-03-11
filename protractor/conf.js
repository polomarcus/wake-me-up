/* protractor-local.conf.js */
exports.config =  {
    allScriptsTimeout: 11000,
    specs: ['../src/test/e2e/*.js'],
    baseUrl: 'http://localhost:4444/wd/hub',
    //baseUrl: 'http://localhost:8080/',
    maxSessions: 1,
    multiCapabilities: [{ //You can add several browsers here
        'browserName': 'chrome'
    }
    ],
    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 30000
    }
};