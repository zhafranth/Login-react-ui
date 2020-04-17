import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Button from "../Component/Button";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  render() {
    return (
      <>
        <div className="form-center">
          <form>
            <div className="form-field">
              <FaUser className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                name="username"
              />
            </div>
            <div className="form-field">
              <FaLock className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
          </form>
        </div>
        <div className="check">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="check-item"
          />{" "}
          Remember me
        </div>
        <div className="button">
          <Button btnType="btn-primary" Title="Login" />
          {/* <Button btnType="btn" Title="Create Account" /> */}
          <Link to="/sign-up" className="btn">
            Create Account
          </Link>
        </div>
        <div className="social-media">
          <h6 className="socialMedia-item">Or login with</h6>
          <button className="socialMedia-item">Facebook</button>
          <button className="socialMedia-item">Linkedin</button>
          <button className="socialMedia-item">Google</button>
        </div>
      </>
    );
  }
}
