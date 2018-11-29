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
      <div className="container-fluid">
        <h1>Details page</h1>
        <div>This will contain details of movies and shows</div>
        <img
          className="img-thumbnail img-responsive"
          src={this.props.poster}
          width="300"
          height="450"
          className="img-responsive"
        />
        <p>Here goes the description of the Movie/Show...</p>
      </div>
    );
  }
}

export default Details;
