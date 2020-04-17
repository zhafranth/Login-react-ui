import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Button from "../Component/Button";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

export default class SignUp extends Component {
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
                placeholder="Full Name"
                name="username"
              />
            </div>
            <div className="form-field">
              <FaEnvelope className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
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
          I agree all statements in terms of service
        </div>
        <div className="button">
          <Button btnType="btn-primary" Title="Sign Up" />
          <Link to="/" className="readyMember">
            <span>I'm already member</span>
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
