Before(async () => {
    client = await remote({
      logLevel: 'trace',
      capabilities: {
        // browserName: 'chrome',
        'appium:deviceName': 'ANTH13009423243F',
        'appium:platformName': 'Android',
        'appium:platformVersion': '11',
        'appium:automationName': 'UiAutomator2',
        'appium:app':'Z:/Testing QA/UTN.BA-TestingQA/Curso Testing Avanzado UTN.BA/Modulo 2/app/TestingAvanzadoApp12.apk',
        'appium:appPackage': 'appinventor.ai_nicholais123.TestingAvanzadoApp',
        // 'appium:appActivity': '.MyActivity',
      },
      port: 4723,
      // path: '/',
      // hostname: 'localhost',
    });
  });