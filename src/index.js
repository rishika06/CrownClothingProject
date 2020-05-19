import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

// -- the provider is a component that is the parent of everything inside our application and as the parent it allows us to get access
// -- to all the things related to the store where we will put all the actual code that we want to store in our redux state

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
