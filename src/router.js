import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppHomePage from "./pages/home";

const AppRouter = () => (
  <Router>
    <div className="body-wrap">
      <div id="st-container" className="st-container">
        <div className="st-pusher">
          <div className="st-content">
            <div className="st-content-inner">
              <Route path="/" exact component={AppHomePage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
