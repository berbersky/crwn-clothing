import "./signin-signout-page.style.scss";
import React from "react";
import SignIn from "./../../component/signin/signin.component";
import SignUp from "../../component/signup/signup.component";

const SignInOut = () => {
	return (
		<div className="signInOut">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInOut;
