const fs = require('fs');
const path = require('path');

const isComponentStory = (story) => story.includes('componentes');
const excludeDocsStories = (story) => !story.includes('docs');

const loadStorybookScenarios = () => {
  const storiesFile = path.resolve(
    path.join(__dirname, '..', '..', 'storybook-static/index.json')
  );
  const stories = JSON.parse(fs.readFileSync(storiesFile, 'utf8'));

  const scenarios = Object.keys(stories.entries)
    .filter((story) => isComponentStory(story) && excludeDocsStories(story))
    .map((storyId) => {
      const story = stories.entries[storyId];

      const defaultSelector = '#storybook-root';

      return {
        label: `${story.kind}-${story.name}`,
        url: `http://localhost:6006/iframe.html?id=${storyId.toLowerCase()}`,
        misMatchThreshold: 1,
        requireSameDimensions: false,
        selectors: [defaultSelector],
        readySelector: defaultSelector,
        readyTimeout: 60000,
        delay: 2000,
      };
    });

  return scenarios;
};

module.exports = {
  loadStorybookScenarios,
};
