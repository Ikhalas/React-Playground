import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import Pagination from "./components/pagination/Pagination";
import ReduxContainer from "./components/redux/ReduxContainer"

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pagination" component={Pagination} />
        <Route exact path="/redux" component={ReduxContainer} />
      </Switch>
    );
  }
  render() {
    return (
     
        <BrowserRouter>
          <Navbar />
          {this.renderRouter()}
        </BrowserRouter>
      
    );
  }
}
