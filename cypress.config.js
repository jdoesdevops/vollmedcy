/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    apiBaseUrl: 'http://localhost:9090',
    baseUrl: 'http://localhost:3000',
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/report/mochawesome-report',
      toConsole: true,
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "x3bmp5"

  },
});
