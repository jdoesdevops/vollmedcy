/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    video: false,
    experimentalSessionAndOrigin: true,
    specPattern: [
      "**/*.integration.test.ts"
    ]
    },
    projectId: "x3bmp5"

  },
});
