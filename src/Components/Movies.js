import React from "react";
import PropTypes from "prop-types";
import { Col } from "fluid-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAcions";

class Movies extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  // handleClick = e => {
  //   let data = { title: e.target.title };
  //   console.log(data);

  //   this.props.details(this.props.posts);
  // };

  render() {
    const list = this.props.posts.map(category => (
      <Link to="/details" key={category.id}>
        <li
          // onClick={this.handleClick.bind(this)}
          className="list-group-item .text-center"
          key={category.id}
          title={category.title}
          poster={category.poster_path}
        >
          {category.title}
        </li>
      </Link>
    ));

    return (
      <Col className="container-fluid" xs="12" sm="4" md="4" lg="6" xl="6">
        <h1>Latest Movies</h1>
        <ul className="list-group">{list}</ul>
        <br />
        <button className="btn btn-default" onClick={this.load}>
          Load More
        </button>
        <hr />
      </Col>
    );
  }
}

Movies.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.movies
});

// const mapDispatchToProps = dispatch => {
//   return {
//     details: details => {
//       dispatch({ type: "UPDATE", details: details });
//     },
//     fetchPosts: this.props.fetchPosts()
//   };
// };

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Movies);
