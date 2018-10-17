import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./ducks/store";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
