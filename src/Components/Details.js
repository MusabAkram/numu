import React, { Component } from "react";
import logo from "../logo.svg";
import { Container, Row, Col } from "fluid-react";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.params);

    return (
      <div>
        <img
          src={this.props.poster}
          width="300"
          height="450"
          className="img-responsive"
        />
        <h1>Details page</h1>
        <div>This will contain details of movies and shows</div>
      </div>
    );
  }
}

export default Details;
