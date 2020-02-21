import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button label="Select" type="primary" />)
  .add('Success', () => <Button label="Success" type="success" />)
  .add('Warning', () => <Button label="Warning" type="warning" />)
  .add('Danger', () => <Button label="Danger" type="danger" />)
  .add('Default', () => <Button label="Okay" type="default" />)
  .add('Large Primary', () => (
    <Button label="Select" type="primary" primaryLarge />
  ))
  .add('Hollow Primary Button', () => (
    <Button label="Select" type="primary" primaryHollow />
  ))
  .add('Hover Primary Button', () => (
    <Button label="select" type="primary" primaryHover />
  ))
  .add('Lite Primary Button', () => (
    <Button label="select" type="primary" primaryLite />
  ))
  .add('Lite Large Primary Button', () => (
    <Button label="select" type="primary" primaryLargeLite />
  ))
  .add('Large Hollow Primary Button', () => (
    <Button label="select" type="primary" primaryLargeHollow />
  ))
  .add('Large Warning', () => (
    <Button label="Warning" label="warning" warningLarge />
  ))
  .add('Hollow Warning Button', () => (
    <Button label="Warning" type="warning" warningHollow />
  ))
  .add('Hover Warning Button', () => (
    <Button label="Warning" type="warning" warningHover />
  ))
  .add('Lite Warning Button', () => (
    <Button label="Warning" type="warning" warningLite />
  ))
  .add('Large Lite Warning Button', () => (
    <Button label="Warning" type="warning" warningLargeLite />
  ))
  .add('Large Default Button', () => (
    <Button label="Got it" type="Okay" defaultLarge />
  ))
  .add('Hover Default Button', () => (
    <Button label="Okay" type="default" defaultHover />
  ))
  .add('Lite Default Button', () => (
    <Button label="Okay" type="default" defaultLite />
  ))
  .add('Large Lite Default Button', () => (
    <Button label="Okay" type="default" defaultLargeLite />
  ))
  .add('Hollow Defualt Button', () => (
    <Button label="Okay" type="default" defaultHollow />
  ))
  .add('Large Hollow Default Button', () => (
    <Button label="Okay" type="default" defaultLargeHollow />
  ))
  .add('Large Success Button', () => (
    <Button label="confirm" type="success" successLarge />
  ))
  .add('Hover Success Button', () => (
    <Button label="confirm" type="success" succesHover />
  ))
  .add('Lite Success Button', () => (
    <Button label="confirm" type="success" successLite />
  ))
  .add('Large Lit Success Button', () => (
    <Button label="confirm" type="success" successLargeLite />
  ))
  .add('Hollow Success Button', () => (
    <Button label="confirm" type="success" successHollow />
  ))
  .add('Large Hollow Success Button', () => (
    <Button label="confirm" type="success" succesLargeHover />
  ));