exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['${WERCKER_SOURCE_DIR}/test/creditscore.spec.js'],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ '--no-sandbox', '--headless', '--disable-gpu', '--window-size=800,600' ]
    }
  }
};