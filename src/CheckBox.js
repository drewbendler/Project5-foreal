import React, { Component } from 'react';
import './CheckBox.css';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  checkedClicked = () => {
    if ((this.state.clicked = false)) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    return (
      <div>
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default CheckBox;
