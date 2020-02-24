import React, { Component } from 'react';
import './UpDown.css';

class UpDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  Increment = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  Decrement = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  render() {
    let classList = '';
    if (this.props.upDown) {
      classList += ` button-upDown`;
    }
    return (
      <div className={classList}>
        <button className="up" onClick={this.Increment}></button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
        <button className="down" onClick={this.Decrement}></button>
      </div>
    );
  }
}

export default UpDown;
