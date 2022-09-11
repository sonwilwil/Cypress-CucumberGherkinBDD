const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/',
    defaultCommandTimeout: 10000,
    viewportHeight: 1050,
    viewportWidth: 1680,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
  },
});
