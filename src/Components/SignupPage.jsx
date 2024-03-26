import React from "react";
import "./Signup.css";

const SignupPage = () => {
  return (
    <>
      <div className="signup-container">
        <h1>SignupPage</h1>
        <div className="form-element">
          <input type="text" name="" id="" placeholder="enter userId" />
          <input type="email" placeholder="enter email...." />
          <input
            type="password"
            placeholder="enter password..."
            name=""
            id=""
          />
          <button className="Signup-btn">SingUp</button>
          <button className="Signup-btn" id="google">
            Continue with Google
          </button>
          <p className="signup-a">
            Have a acoount? <a href="#">SignIn</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
