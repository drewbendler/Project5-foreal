import React from 'react';
import './Forms.css';
import { clearDecorators } from '@storybook/react/dist/client/preview';

const Forms = props => {
  let classList = '';
  let types = ['normal', 'medium', 'large'];
  if (types.includes(props.type)) {
    classList += `form-${props.type}`;
  }
  if (props.normalForm) {
    classList += ` form-normal`;
  }
  if (props.mediumForm) {
    classList += ` form-medium`;
  }
  if (props.largeForm) {
    classList += ` form-large`;
  }

  return (
    <form className={classList}>
      {props.label}
      <input className={classList} placeholder="Email" />
    </form>
  );
};
export default Forms;
