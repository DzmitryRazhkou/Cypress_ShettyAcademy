const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  reporter: 'mochawesome',
  
  env: {
    url: 'https://rahulshettyacademy.com/client'
  },

  retries: {
    runMode: 1,
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/*.js'

  },
});
