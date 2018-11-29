import React from "react";
import PropTypes from "prop-types";
import { Col } from "fluid-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShows } from "../actions/postAcions";

class Tvshows extends React.Component {
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
  //     shows: [],
  //     numToShow: 10,
  //     date: date,
  //     pgnmbr: 1,
  //     newPgnmbr: 1
  //   };
  //   this.load = this.load.bind(this);
  // }
  // // the api request function
  // fetchApi() {
  //   let url =
  //     "https://api.themoviedb.org/3/discover/tv?api_key=127b71a13b2cc51667348704372ba1df&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=" +
  //     this.state.date +
  //     "&page=" +
  //     this.state.pgnmbr +
  //     "&include_null_first_air_dates=false";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       // update state with API data
  //       this.setState({
  //         shows: [...this.state.shows, ...data.results]
  //       });
  //     });
  // }
  // load() {
  //   let increment = this.state.numToShow + 10;
  //   if (this.state.numToShow % 20 === 0) {
  //     this.setState({ pgnmbr: this.state.pgnmbr + 1 });
  //   }
  //   this.setState({ numToShow: increment });
  // }
  // componentDidMount() {
  //   this.fetchApi();
  // }
  // componentDidUpdate() {
  //   if (this.state.newPgnmbr !== this.state.pgnmbr) {
  //     this.fetchApi();
  //     this.setState({
  //       newPgnmbr: this.state.pgnmbr
  //     });
  //   }
  componentWillMount() {
    this.props.fetchShows();

    // this.fetchApi();
  }

  render() {
    console.log(this.props.posts);
    return (
      <Col className="container-fluid" xs="12" sm="4" md="4" lg="6" xl="6">
        <h1>Latest TvShows</h1>
        <ul className=" list-group">
          {this.props.posts.map((category, key) => (
            <Link
              to="/details"
              params={{ testvalue: "hello" }}
              key={category.id}
            >
              <li
                className="list-group-item "
                key={category.id}
                title={category.name}
                poster={category.poster_path}
              >
                {category.name}
                {/* <img
                  responsive="true"
                  src={"http://image.tmdb.org/t/p/w185/" + category.poster_path}
                  width="50"
                  height="50"
                /> */}
              </li>
            </Link>
          ))}
        </ul>
        <br />
        <button className="btn" onClick={this.load}>
          Load More
        </button>
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
