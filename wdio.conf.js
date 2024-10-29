const allure = require('wdio-allure-reporter').default;

exports.config = {
    runner: 'local',
    specs: [
        './src/tests/**/*.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--no-sandbox', '--disable-dev-shm-usage'],
        },
    }],
    logLevel: 'info',

    // Add the chromedriver service
    services: ['chromedriver'],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: ['spec', ['allure', {outputDir: 'allure-results'}]],

    before: function (capabilities, specs) {
        require('ts-node/register');
    },

    after: function (capabilities, specs) {
        // This will be called after all tests have finished
        // Ensure to call allure.generate() here if needed for cleanup
    },

    onPrepare: function (capabilities, specs) {
        // This will be called once before all workers are launched
        // You can do setup here if needed
    },

    onComplete: function () {
        // This will be called once all tests are done, you can perform cleanup here
    },

    onError: function (error, result, capabilities) {
        // This will be called on test errors
    },

    afterEach: function (capabilities, specs) {
        // This will be called after each test, you can use this to log additional info
    }
};
