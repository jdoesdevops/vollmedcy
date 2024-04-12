/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    video: false,
    experimentalSessionAndOrigin: true,
    specPattern: [
      "**/*.integration.test.ts"
    ]
  }
})
