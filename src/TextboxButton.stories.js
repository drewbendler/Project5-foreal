import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Forms from './Form';
import TextboxButton from './TextboxButton';

storiesOf('TextBoxButton', module).add('Text Box Button', () => (
  <TextboxButton txtboxbutton />
));
