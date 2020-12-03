import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.styles.scss";

export class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		// check if password is the same as the confirmpassword
		if (password !== confirmPassword) {
			alert("password d'ont mutch");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			// clear the form
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			// console.log(error.message);
			alert(error.message);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title"> I do not have a account</h2>
				<span>Sign up whith your email and password</span>
				<form className={"sign-up-form"} onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						handleChange={this.handleChange}
						label="Display Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>

					<CustomButton type="submit"> SIGN UP </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
