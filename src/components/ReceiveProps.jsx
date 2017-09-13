import React from 'react';
import PropTypes from 'prop-types';

class ReceiveProps extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    this.props.onButtonClick();
  }

  render() {
    return(
      <button onClick={this.handleButtonClick}>Click Here!</button>
    )
  }
}

ReceiveProps.propTypes = {
  onButtonClick: PropTypes.func,
};

export default ReceiveProps;
