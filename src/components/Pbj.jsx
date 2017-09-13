import React from "react";
import ReceiveProps from "./ReceiveProps";

class Pbj extends React.Component {

  constructor(props) {
    super(props);
    console.log("1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
    this.state = {
      stuff: ["newStuff"],
    }
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.destroyEverything = this.destroyEverything.bind(this);
    let displayArea = null;
  }

  componentWillMount() {
    console.log("2. Open jar of peanut butter by twisting the lid counter-clockwise.");
  }

  componentDidMount() {
    console.log("3. Pick up a butter knife by the handle and insert into the jar of peanut butter");
  }

  componentWillReceiveProps() {
    console.log("4. Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.");

  }

  shouldComponentUpdate() {
    console.log("5. Grab a second slice of bread.");
    return true;
  }

  componentWillUpdate() {
    console.log("6. Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.");
  }

  componentDidUpdate() {
    console.log("8. Cut the sandwich diagonally using one of the knives.");
  }

  destroyEverything(){
    var newMasterStuff = this.state.stuff.slice();
    newMasterStuff.pop();
    this.setState({stuff: newMasterStuff});
  }

  render() {
    if (this.state.stuff.includes("newStuff")) {
      this.displayArea =
      <div>
        <h1>I am a banana in this sandwich.</h1>
        <img src="http://i0.kym-cdn.com/entries/icons/original/000/003/117/banana.jpg"/>

        <div>Once you've stuck the butter knife in the PB jar...
          {this.state.stuff.map((receiver, index) =>
            <ReceiveProps
              destroyEverything={this.destroyEverything}
              onButtonClick={this.componentWillReceiveProps}
              heresSomeStuff={receiver}
              key={index}/>
          )}
        </div>
      </div>
    } else {
      this.displayArea = <p>YOU MADE A SANDWICH, YOU CHEF YOU.</p>
    }

    return (
      <h1>
        {this.displayArea}
      </h1>
    );
  }
}

export default Pbj;
