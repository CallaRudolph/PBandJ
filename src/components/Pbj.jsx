import React from "react";

class Pbj extends React.Component {

  constructor(props) {
    super(props);
    console.log("1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
  }

  componentWillMount() {
    console.log("2. Open jar of peanut butter by twisting the lid counter-clockwise.");
  }

  render() {
    return (
      <div>
        <h1>I am a banana in this sandwich.</h1>
      </div>
    );
  }
}

export default Pbj;
