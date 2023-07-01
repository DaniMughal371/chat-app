//Dependencies
import React from "react";

//Render SignUp Page
const SignIn = () => {
  //Render the SignUp Page
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Every Chat</span>
        <span className="title">Sign Up</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="passowrd" placeholder="password" />
          <button>Sign Up</button>
        </form>
        <p>You don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

//Export the SignUp Component
export default SignIn;
