const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vvb4yz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://blazedemo.com/'
  },
});
