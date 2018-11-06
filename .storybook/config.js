import { configure } from '@storybook/react';

function loadStories() {
  require('../packages/button/index.stories');
}

configure(loadStories, module);
