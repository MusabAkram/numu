import React from "react";
import PropTypes from "prop-types";
import { Col } from "fluid-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShows } from "../actions/postAcions";

class Tvshows extends React.Component {
  componentWillMount() {
    this.props.fetchShows();
  }

  render() {
    const list = this.props.posts.map(category => (
      <Link to="/details" key={category.id}>
        <li
          className="list-group-item .text-center"
          key={category.id}
          title={category.name}
          poster={category.poster_path}
        >
          {category.name}
        </li>
      </Link>
    ));
    console.log(this.props.posts);
    return (
      <Col className="container-fluid" xs="12" sm="4" md="4" lg="6" xl="6">
        <h1>Latest TvShows</h1>
        <ul className=" list-group">{list}</ul>
        <br />
        <button className="btn">Load More</button>
        <hr />
      </Col>
    );
  }
}
Tvshows.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.shows
});

export default connect(
  mapStateToProps,
  { fetchShows }
)(Tvshows);
