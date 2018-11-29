import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./Components/Details";
import * as serviceWorker from "./serviceWorker";
import { Switch, BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
