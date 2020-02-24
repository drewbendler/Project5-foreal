import React, { Component } from 'react';
import './TextboxButton.css';
import Forms from './Form';
import Button from './Button';

class TextboxButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    return (
      <div className="txtboxbtn">
        <Forms placeholder="Voucher Code" type="normal" className="textbox" />
        <Button label="Redeem" type="primary" className="textboxButton" />
      </div>
    );
  }
}

export default TextboxButton;
