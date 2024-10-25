const {
  loadStorybookScenarios,
} = require('./visual-tests/engine_scripts/stories.utils');

module.exports = {
  id: 'backstop_visual-tests',
  viewports: [
    {
      label: 'desktop',
      width: 1920,
      height: 1080,
    },
  ],
  onReadyScript: 'puppet/onReady.js',
  scenarios: loadStorybookScenarios(),
  paths: {
    bitmaps_reference: 'visual-tests/visual_images_reference',
    bitmaps_test: 'visual-tests/visual_images_test',
    engine_scripts: 'visual-tests/engine_scripts',
    html_report: 'visual-tests/html_report',
    ci_report: 'visual-tests/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  debug: false,
  debugWindow: false,
  scenarioLogsInReports: false,
};
