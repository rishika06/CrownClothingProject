import React from "react";
import "./signInSignUp.scss";
import SignIn from "../../components/sign-in/sign-in.comp";
import SignUp from "../../components/sign-up/sign-up.comp";

const SignInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
