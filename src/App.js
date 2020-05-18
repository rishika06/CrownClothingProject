import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from "./pages/shop/shop.comp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
