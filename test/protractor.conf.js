exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['$WERCKER_ROOT/test/*.spec.js'],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  }
};