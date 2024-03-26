import React from "react";
import "./Login.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <h1>Sign In</h1>
        <div className="icons">
          <div className="facebook icon">
            <TiSocialFacebook />
          </div>
          <div className="google icon">
            <FaGoogle />
          </div>
          <div className="linkedIn icon">
            <TiSocialLinkedin />
          </div>
        </div>
        <div className="Login-Container">
          <div className="Login-form-div">
            <p>or use your account</p>

            <input type="email" placeholder="email...." />
            <input type="password" placeholder="password...." />

            <button className="Login-btn">SignIn</button>
            <button className="Login-btn google" id="Google">
              Continue with Google
            </button>
            <div className="login-para">
              <p className="Login-para-register">
                yet not registerd?{" "}
                <Link to={"/signup"}>
                  <a href="#">Register</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
