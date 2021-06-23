import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./signin";
import Home from "./home";
import Appointment from "./appointment"
import Admin from "./admin"
const Loginbox = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
);
render(<Loginbox />, document.getElementById("root"));
