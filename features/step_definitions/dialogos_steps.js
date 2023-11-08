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

Given ('ingreso a la seccion dialogos', async()=>{
  const registerButton = await driver.$(locators.btnDialogos);// localizamos el button de registro
  registerButton.click();// hacemos click en el button de registro 
})

When ('ingreso en el elemento Mensaje', async()=>{

})

Then ('compruebo {string}', async(text)=>{

})

// Escenario: Validacion de Eleccion

When('ingreso en el elemento Eleccion', async ()=>{
  // Implementación de ingreso en el elemento
});

Then('compruebo la opcion si', async ()=>{
  // Implementación de comprobación de la opción
});

Then('compruebo la opcion no', async ()=>{
  // Implementación de comprobación de la opción
});


// Escenario: Validacion Contraseña

When('ingreso en el elemento Contraseña', async ()=>{
  // Implementación de ingreso en el elemento
});

Then('completo con la contraseña {string}', async (contrasena)=>{
  // Implementación de ingreso de contraseña
});

Then('acepto el ingreso', async ()=>{
  // Implementación de aceptar el ingreso
});

// Escenario: Validacion Alerta

When('ingreso en el elemento Alerta', async ()=>{
  // Implementación de ingreso en el elemento
});

Then('veo un mensaje de {string}', async (mensaje)=>{
  // Implementación de verificación del mensaje
});