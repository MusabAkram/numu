import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./Components/Details";
import * as serviceWorker from "./serviceWorker";
import { Switch, BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="jumbotron">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
