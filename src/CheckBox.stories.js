import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './CheckBox';

storiesOf('Checkbox', module).add('CheckBox', () => (
  <CheckBox label="" checkbox />
));
