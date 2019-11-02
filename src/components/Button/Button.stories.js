/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Add16, Search16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { settings } from 'carbon-components';
import { iconAddSolid, iconSearch } from 'carbon-icons';
import React from 'react';
import Button from '../../components/Button';
import ButtonSkeleton from '../../components/Button/Button.Skeleton';

const { prefix } = settings;

const icons = {
  None: 'None',
  'Add (Add16 from `@carbon/icons-react`)': 'Add16',
  'Search (Search16 from `@carbon/icons-react`)': 'Search16',
};

const iconMap = {
  iconAddSolid,
  iconSearch,
  Add16,
  Search16,
};

const kinds = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  ghost: 'ghost',
};

const sizes = {
  default: 'default',
  field: 'field',
  small: 'small',
};

const props = {
  regular: () => {
    const iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text(
        'Icon description (iconDescription)',
        'Button icon'
      ),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
  iconOnly: () => {
    const iconToUse = iconMap[select('Icon (icon)', icons, 'Add16')];
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text(
        'Icon description (iconDescription)',
        'Button icon'
      ),
      tooltipPosition: select(
        'Tooltip position (tooltipPosition)',
        ['top', 'right', 'bottom', 'left'],
        'bottom'
      ),
      tooltipAlignment: select(
        'Tooltip alignment (tooltipAlignment)',
        ['start', 'center', 'end'],
        'center'
      ),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
  set: () => {
    const iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      small: boolean('Small (small)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text(
        'Icon description (iconDescription)',
        'Button icon'
      ),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
};

const CustomLink = ({ children, href, ...other }) => (
  <a href={href} {...other}>
    {children}
  </a>
);

export default {
  title: 'Button',
  component: Button,
};

export const defaut = () => {
  const regularProps = props.regular();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button {...regularProps} className="some-class">
        Button
      </Button>
      &nbsp;
      <Button {...regularProps} href="#" className="some-class">
        Link
      </Button>
      &nbsp;
      <Button {...regularProps} as="p" href="#" className="some-class">
        Element
      </Button>
      &nbsp;
      <Button {...regularProps} as={CustomLink} href="#" className="some-class">
        Custom component
      </Button>
    </div>
  );
};
defaut.story = { name: 'Default' };

export const iconOnlyButtons = () => (
  <Button {...props.iconOnly()} hasIconOnly />
);
iconOnlyButtons.story = { name: 'Icon-only buttons' };

export const setOfButtons = () => {
  const setProps = props.set();
  return (
    <div className={`${prefix}--btn-set`}>
      <Button kind="secondary" {...setProps}>
        Secondary button
      </Button>
      <Button kind="primary" {...setProps}>
        Primary button
      </Button>
    </div>
  );
};
setOfButtons.story = {
  parameters: {
    docs: {
      storyDescription:
        'When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart',
    },
  },
};

export const skeleton = () => (
  <div>
    <ButtonSkeleton />
    &nbsp;
    <ButtonSkeleton href="#" />
    &nbsp;
    <ButtonSkeleton size="small" />
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
