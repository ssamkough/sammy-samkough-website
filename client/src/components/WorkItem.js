import React, { Component } from "react";
class WorkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  renderListItems = () => {
    return this.props.list.map((e, index) => 
      <li key={index}>{e}</li>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <strong className="strong">{this.props.company}</strong>
          <br />
          <strong>{this.props.role}</strong>
          <div>
            <p className="left">{this.props.firstName}</p>
            <p className="right">{this.props.lastName}</p>
          </div>
        </div>
        <div className="body">
          <ul>auto-generated li</ul>
          {this.renderListItems()}
        </div>
      </div>
    );
  }
}

export default WorkItem;
