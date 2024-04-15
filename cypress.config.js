/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 25000,
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
    env: {
      "email": "clinica@gmail.com",
      "senha": "4321",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista",
      "requestMode": true
    },
    projectId: "x3bmp5"

  },
});
