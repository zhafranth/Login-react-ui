import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Title from "./Component/Title";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="kiri"></div>
        <div className="kanan">
          <Title />
          <div className="Form-title">
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle-active"
              className="FormTitle-item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/sign-up"
              activeClassName="FormTitle-active"
              className="FormTitle-item"
            >
              Sign Up
            </NavLink>
            <Route path="/" exact component={SignIn} />
            <Route path="/sign-up" exact component={SignUp} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
