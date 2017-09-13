import React from "react";
import ReceiveProps from "./ReceiveProps.jsx";

class Pbj extends React.Component {

  constructor(props) {
    super(props);
    console.log("1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount() {
    console.log("2. Open jar of peanut butter by twisting the lid counter-clockwise.");
  }

  componentDidMount() {
    console.log("4. Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.");
  }

  componentWillReceiveProps() {
    console.log("5. Grab a second slice of bread.");
  }

  render() {
    console.log("3. Pick up a butter knife by the handle and insert into the jar of peanut butter");
    return (
      <div>
        <h1>I am a banana in this sandwich.</h1>
        <p>Once you've stuck the butter knife in the PB jar...</p>
        <ReceiveProps onButtonClick={this.componentWillReceiveProps}/>
      </div>
    );
  }

}

export default Pbj;
