import React, { Component } from "react";
import WorkItem from "../WorkItem";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['test', 'fish', 'maplestory', 'CBA']
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="center">Work</h2>
        <WorkItem 
          firstName={'FISH'}
          lastName={'Salmon'}
          company={'test'}
          role={'software'}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default Work;
