const report = require('multiple-cucumber-html-reporter')

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "cypress/cucumber-json/cucumber-html-report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "96"
        },
        device: "Local Machine",
        platform: {
            name: "MacOs",
            version: "gatau"
        }
    }
})