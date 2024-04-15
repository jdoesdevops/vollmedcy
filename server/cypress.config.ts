/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: '../cypress/support/e2e.ts',
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
    defaultCommandTimeout: 25000,
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: '../cypress/report/mochawesome-report',
      toConsole: true,
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "x3bmp5"

  },
});
