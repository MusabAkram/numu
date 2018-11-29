import React from "react";
import PropTypes from "prop-types";
import { Col } from "fluid-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAcions";

class Movies extends React.Component {
  // constructor(props) {
  //   super(props);
  //   var today = new Date(),
  //     date =
  //       today.getFullYear() +
  //       "-" +
  //       (today.getMonth() + 1) +
  //       "-" +
  //       today.getDate();
  //   this.state = {
  //     movies: [],
  //     numToShow: 10,
  //     date: date,
  //     pgnmbr: 1,
  //     newPgnmbr: 1
  //   };
  //   this.load = this.load.bind(this);
  // }

  // load() {
  //   let increment = this.state.numToShow + 10;
  //   if (this.state.numToShow % 20 === 0) {
  //     this.setState({ pgnmbr: this.state.pgnmbr + 1 });
  //   }
  //   this.setState({
  //     numToShow: increment
  //   });
  // }
  // // the api request function
  // fetchApi() {
  //   let url =
  //     "https://api.themoviedb.org/3/discover/movie?api_key=127b71a13b2cc51667348704372ba1df&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=" +
  //     this.state.pgnmbr +
  //     "&release_date.lte=" +
  //     this.state.date;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       // update state with API data
  //       this.setState({
  //         movies: [...this.state.movies, ...data.results]
  //       });
  //     });
  // }

  componentWillMount() {
    this.props.fetchPosts();

    // this.fetchApi();
  }
  handleClick = e => {
    let data = { title: e.target.title };
    console.log(data);

    this.props.details(this.props.posts);
  };
  // componentDidUpdate() {
  //   if (this.state.newPgnmbr !== this.state.pgnmbr) {
  //     this.fetchApi();
  //     this.setState({
  //       newPgnmbr: this.state.pgnmbr
  //     });
  //   }
  // }
  render() {
    console.log(this.props.posts);

    const list = this.props.posts.map(category => (
      <Link to="/details" key={category.id}>
        <li
          onClick={this.handleClick.bind(this)}
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
        <button className="btn align-middle" onClick={this.load}>
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

const mapDispatchToProps = dispatch => {
  return {
    details: details => {
      dispatch({ type: "UPDATE", details: details });
    },
    fetchPosts: fetchPosts()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
