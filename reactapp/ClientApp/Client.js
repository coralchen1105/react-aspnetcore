import ReactDOM from "react-dom";
import React from "react";
import { browserHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

//import FullPage from "./Components/common/FullPage";
import { renderRoutes } from "react-router-config";

import configureStore from "../redux/configureStore";
import Routes from "./Routes";

const store = configureStore(window.__STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{renderRoutes(Routes)}</Router>
  </Provider>,
  document.getElementById("app")
);
