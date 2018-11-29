import React, { Component } from "react";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import { Row } from "fluid-react";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Row>
            <Movies />
            <Tvshows />
          </Row>
        </div>
      </Provider>
    );
  }
}

export default App;
