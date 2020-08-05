import React, { Component } from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    const { showHideDemo1 } = this.props;
    return <>{showHideDemo1 && <div>This is Demo1 component</div>}</>;
  }
}

export default Demo1;
