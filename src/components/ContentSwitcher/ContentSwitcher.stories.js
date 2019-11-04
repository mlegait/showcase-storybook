/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';
import ContentSwitcher from '../../components/ContentSwitcher';
import Switch from '../../components/Switch';

export default {
  title: 'ContentSwitcher',
  component: ContentSwitcher,
};

export const defaut = () => (
  <ContentSwitcher onChange={action('onChange')} selectedIndex={0}>
    <Switch text="First section" onClick={action('Switch - onClick')} />
    <Switch text="Second section" onClick={action('Switch - onClick')} />
    <Switch text="Third section" onClick={action('Switch - onClick')} />
  </ContentSwitcher>
);
defaut.story = { name: 'Default' };

export const selected = () => (
  <ContentSwitcher onChange={action('onChange')} selectedIndex={1}>
    <Switch text="First section" onClick={action('Switch - onClick')} />
    <Switch text="Second section" onClick={action('Switch - onClick')} />
    <Switch text="Third section" onClick={action('Switch - onClick')} />
  </ContentSwitcher>
);
selected.story = {
  parameters: {
    docs: {
      storyDescription:
        'Render the Content Switcher with a different section automatically selected',
    },
  },
};
