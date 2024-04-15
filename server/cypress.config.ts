/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9090',
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
