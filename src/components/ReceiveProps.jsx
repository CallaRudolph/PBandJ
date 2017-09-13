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

  componentWillUnmount() {
    console.log("7. Press the two slices of bread together so that the peanut butter and jelly meet.");
  }

  render() {
    return(
      <div>
        <button onClick={this.handleButtonClick}>Click Here!</button>
        <button onClick={this.props.destroyEverything}>Delete Me!</button>

      </div>
    )
  }
}

ReceiveProps.propTypes = {
  onButtonClick: PropTypes.func,
  destroyEverything: PropTypes.func
};

export default ReceiveProps;
