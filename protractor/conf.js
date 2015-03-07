/* protractor-local.conf.js */
exports.config =  {
    specs: ['../src/test/e2e/*.js'],
    baseUrl: 'http://localhost:8080/',
    maxSessions: 1,
    multiCapabilities: [
        { browserName: 'chrome' }
    ]
};