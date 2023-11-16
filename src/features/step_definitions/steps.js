const { Given, When, Then, Before} = require('@cucumber/cucumber');
const { expect, assert} = require('chai');
const Locators = require('../pages/locators');
const {remote} = require('webdriverio');

let driver;
const locators = new Locators()

Before( { timeout: 100000 }, async () => {
  driver = await remote({
    logLevel: 'trace',
    capabilities: {
      // browserName: 'chrome',
      'appium:deviceName': 'emulator-5554',
      'appium:platformName': 'Android',
      'appium:platformVersion': '13',
      'appium:automationName': 'UiAutomator2',
      'appium:app':'Z:/Testing QA/UTN.BA-TestingQA/Curso Testing Avanzado UTN.BA/Modulo 2/app/TestingAvanzadoApp12.apk',
      'appium:appPackage': 'appinventor.ai_nicholais123.TestingAvanzadoApp',
      'appium:enforceXPath1': true,
      // 'appium:appActivity': '.MyActivity',
    },
    port: 4725,
    // path: '/',
    // hostname: 'localhost',
  });
});

Given('realizo tap en contador de tenis y se abre {string}', async (text) => {
  const btnTenisCount = await driver.$(locators.btnContadorTenis);// localizamos el button de registro
  btnTenisCount.click();// hacemos click en el button de registro 

});

When('realizo tap en jugador rojo y obtengo 15 en el tablero', async () => {
console.log('se suman 15 puntos en rojo')

});

When('realizo tap x n° {int} para ganar el set el jugador red', async (veces) => {
  // Código para interactuar con el botón de inicio de sesión
  // const boton = await driver.$(locators.redTap);
  const elemento = await driver.$(locators.redTap);

  for (let i = 0; i < veces; i++) {
    await elemento.click();
    
  }

});

Then('el jugador 2 ha ganado 1 set y muestra {string}', async (texto) => {
  const textoGame2 = await driver.$(locators.textwin)
  const textObtenido = await textoGame2.getText()
  console.log(textObtenido)
  
  expect(textObtenido).to.include(texto)

});
