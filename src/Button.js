import React from 'react';
import './Button.css';

const Button = props => {
  let classList = '';
  let types = ['primary', 'danger', 'warning', 'success', 'default'];
  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }
  if (props.primaryLarge) {
    classList += ` primary-button-large`;
  }
  if (props.primaryHollow) {
    classList += ` button-primary-hollow`;
  }
  if (props.primaryLargeLite) {
    classList += ` button-primary-large-lite`;
  }
  if (props.primaryHover) {
    classList += ` button-primary-hover`;
  }
  if (props.primaryLite) {
    classList += ` button-primary-lite`;
  }
  if (props.primaryLargeHollow) {
    classList += ` button-primary-large-hollow`;
  }
  if (props.warningLarge) {
    classList += ` button-warning-large`;
  }
  if (props.warningHollow) {
    classList += ` button-warning-hollow`;
  }
  if (props.warningHover) {
    classList += ` button-warning-hover`;
  }
  if (props.warningLite) {
    classList += ` button-warning-lite`;
  }
  if (props.warningLargeLite) {
    classList += ` button-warning-large-lite`;
  }
  if (props.warningLargeHollow) {
    classList += ` button-warning-large-hollow`;
  }
  if (props.defaultLarge) {
    classList += ` button-default-large`;
  }
  if (props.defaultHover) {
    classList += ` button-default-hover`;
  }
  if (props.defaultLite) {
    classList += ` button-default-lite`;
  }
  if (props.defaultLargeLite) {
    classList += ` button-default-large-lite`;
  }
  if (props.defaultHollow) {
    classList += ` button-default-hollow`;
  }
  if (props.defaultLargeHollow) {
    classList += ` button-default-large-hollow`;
  }
  if (props.successLarge) {
    classList += ` button-success-large`;
  }
  if (props.succesHover) {
    classList += ` button-success-hover`;
  }
  if (props.successLite) {
    classList += ` button-success-lite`;
  }
  if (props.successLargeLite) {
    classList += ` button-succes-large-lite`;
  }
  if (props.successHollow) {
    classList += ` button-success-hollow`;
  }
  if (props.succesLargeHollow) {
    classList += ` button-success-large-hollow`;
  }
  if (props.dangerLarge) {
    classList += ` button-danger-large`;
  }
  if (props.dangerLargeHollow) {
    classList += ` button-danger-large-hollow`;
  }
  if (props.dangerHover) {
    classList += ` button-danger-hover`;
  }
  if (props.dangerLite) {
    classList += ` button-danger-lite`;
  }
  if (props.dangerLargeLite) {
    classList += ` button-danger-large-lite`;
  }
  if (props.dangerHollow) {
    classList += ` button-danger-hollow`;
  }
  if (props.addToCartButton) {
    classList += ` button-addToCart`;
  }

  return (
    <button className={classList} onCLick={props.onCLick}>
      {props.label}
    </button>
  );
};
export default Button;
