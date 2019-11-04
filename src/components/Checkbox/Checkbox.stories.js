/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import { settings } from 'carbon-components';
import React from 'react';
import Checkbox from '../../components/Checkbox';
import CheckboxSkeleton from '../../components/Checkbox/Checkbox.Skeleton';

const { prefix } = settings;

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: `
    Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
    The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked
    by setting the defaultChecked property to true. To use the component in a controlled way, you should set the
    checked property instead.
  `,
  },
};

export const checked = () => {
  return (
    <fieldset className={`${prefix}--fieldset`}>
      <legend className={`${prefix}--label`}>Checkbox heading</legend>
      <Checkbox
        defaultChecked
        labelText="Checkbox 1"
        onChange={action('onChange')}
        id="checkbox-label-1"
      />
      <Checkbox
        defaultChecked
        labelText="Checkbox 2"
        onChange={action('onChange')}
        id="checkbox-label-2"
      />
    </fieldset>
  );
};

export const unchecked = () => {
  return (
    <fieldset className={`${prefix}--fieldset`}>
      <legend className={`${prefix}--label`}>Checkbox heading</legend>
      <Checkbox
        labelText="Checkbox 1"
        onChange={action('onChange')}
        id="checkbox-label-1"
      />
      <Checkbox
        labelText="Checkbox 2"
        onChange={action('onChange')}
        id="checkbox-label-2"
      />
    </fieldset>
  );
};

export const skeleton = () => (
  <div>
    <CheckboxSkeleton />
  </div>
);
skeleton.story = {
  parameters: {
    docs: {
      storyDescription:
        'Placeholder skeleton state to use when content is loading.',
    },
  },
};
