import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

addDecorator(withKnobs);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js or *.stories.mdx
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
