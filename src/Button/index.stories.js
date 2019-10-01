import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import markdown from './README.md';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add('Basic label', () => <Button label={text('label', 'click me')} />, {
  notes: { markdown }
});
