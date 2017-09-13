import React from "react";
import ReceiveProps from "./ReceiveProps.jsx";

class Pbj extends React.Component {

  constructor(props) {
    super(props);
    console.log("1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
    this.state = {
      stuff: [],
    }
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
    var newMasterStuff = this.state.stuff.slice();
    newMasterStuff.push("newStuff");
    this.setState({stuff: newMasterStuff});
  }

  shouldComponentUpdate() {
    console.log("6. Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.");
    return true;
  }

  componentWillUpdate() {
    console.log("7. Press the two slices of bread together so that the peanut butter and jelly meet.");
  }

  componentDidUpdate() {
    console.log("8. Cut the sandwich diagonally using one of the knives.");
  }

  render() {
    console.log("3. Pick up a butter knife by the handle and insert into the jar of peanut butter");
    return (
      <div>
        <h1>I am a banana in this sandwich.</h1>
        <img src="http://i0.kym-cdn.com/entries/icons/original/000/003/117/banana.jpg"/>
        <p>Once you've stuck the butter knife in the PB jar... <ReceiveProps onButtonClick={this.componentWillReceiveProps}/></p>

      </div>
    );
  }

}

export default Pbj;
