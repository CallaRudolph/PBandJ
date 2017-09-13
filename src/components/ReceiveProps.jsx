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
        <p>
          Once you've stuck the butter knife in the PB jar...
          <button onClick={this.handleButtonClick}>Click Here!</button>
        </p>

        <p>
          Once you've spread that goodness on one slice of bread...  
          <button onClick={this.props.destroyEverything}>Delete Me!</button>
        </p>


      </div>
    )
  }
}

ReceiveProps.propTypes = {
  onButtonClick: PropTypes.func,
  destroyEverything: PropTypes.func
};

export default ReceiveProps;
