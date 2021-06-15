import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./signin";
import Home from "./home";
import Dashboard from "./dashboard"
const Loginbox = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);
render(<Loginbox />, document.getElementById("root"));
