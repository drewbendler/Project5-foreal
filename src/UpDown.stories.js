import React from 'react';
import { storiesOf } from '@storybook/react';

import UpDown from './UpDown';
import Button from './Button';

storiesOf('Up down button', module).add('Increment/decrement', () => (
  <UpDown label="quantity" upDown />
));
