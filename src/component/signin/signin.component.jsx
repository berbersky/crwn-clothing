import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import "./signin.style.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			pasword: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					{/* <label>Email</label> */}
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						autoComplete="current-password"
						label="Password"
						required
					/>
					{/* <label>Password</label> */}
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
