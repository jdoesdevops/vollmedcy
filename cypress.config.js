/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  envs: {
    apiBaseUrl: 'http://127.0.0.1:8080',
    baseUrl: 'http://127.0.0.1:3000',
  },
  e2e: {
    supportFile: false,
    video: false,
    experimentalSessionAndOrigin: true,
    specPattern: [
      "**/*.integration.test.ts"
    ]
  }
})
