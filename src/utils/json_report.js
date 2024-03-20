const { exec } = require('child_process');

exec('npx cucumber-js --format=json:./reports/cucumber_report.json', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    const reporter = require('cucumber-html-reporter');

    const options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber_report.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version": "1.0.0",
            "Test Environment": "Testing",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    // Escucha el evento 'exit' para asegurarte de que las pruebas se completen
    process.on('exit', () => {
        reporter.generate(options);
    });
});

