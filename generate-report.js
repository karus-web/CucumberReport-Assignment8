const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  113.0.0.0",
    "Platform": "Mac OS",
    "Executed": "Local"
  }
};

reporter.generate(options);
