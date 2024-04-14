/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    apiBaseUrl: 'http://localhost:8080',
    baseUrl: 'http://localhost:3000',
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: '../cypress/results',
      mochaFile: '../cypress/results/test-file.html',
      toConsole: true,
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "x3bmp5"

  },
});
