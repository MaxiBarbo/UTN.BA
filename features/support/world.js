const wd = require('wd');

const driver = wd.promiseChainRemote({
  host: 'localhost',
  port: 4723,
});

const desiredCapabilities = {
  platformName: 'Android',
  deviceName: 'ANTH13009423243F',
//   'appium:appPackage':'com.google.android.apps.messaging',
//   'appium:appActivity':'com.google.android.apps.messaging.ui.ConversationListActivity',
//   app: 'ruta_al_apk_de_tu_aplicacion',
  automationName: 'UiAutomator2',
};

async function setUp() {
  await driver.init(desiredCapabilities);
}

async function tearDown() {
  await driver.quit();
}

module.exports = {
  driver,
  setUp,
  tearDown,
};
