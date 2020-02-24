import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
  .add('Normal', () => <Form label="Email" type="normal" normalForm />)
  .add('Medium', () => <Form label="Email" type="medium" mediumForm />)
  .add('large', () => <Form label="Email" type="large" largeForm />);
