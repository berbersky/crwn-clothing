import React, { useState } from "react";
import shopingBag from "../../assets/shopping-bag.svg";
// import "./formBase.style.scss";
import { useForm } from "react-hook-form";

export default function FormBase() {
	const { register, handleSubmit, errors } = useForm({
		mode: "onChange",
	});

	const onSubmit = ({ login, password }) => {
		// event.preventDefault(); useForm do it automaticaly
		alert(`Welcome ${login}, your new password is ${password}`);
	};
	return (
		<div className="wrapper">
			<form onSubmit={handleSubmit(onSubmit)}>
				<header>
					<img width="40" src={shopingBag} alt="Logo" />
				</header>
				<label htmlFor="login">
					<strong>Login</strong>
				</label>
				<input
					ref={register({ required: true, maxLength: 10 })}
					type="text"
					name="login"
					id="login"
				/>
				{errors.login ? <div>{errors.message}</div> : null}
				<label htmlFor="password">
					<strong>password</strong>
				</label>
				<input
					ref={register({ required: true, minLength: 6 })}
					type="password"
					name="password"
					id="password"
				/>
				{errors.password ? <div>{errors.password.message}</div> : <p>fgdsfg</p>}
				<button type="submit">Log in</button>
			</form>
		</div>
	);
}

/**
 * ---------------------------
 *  useState to manage forms
 * ----------------------------
 * 
 
import React, { useState } from "react";
import shopingBag from "../../assets/shopping-bag.svg";
import "./formBase.style.scss";

export default function FormBase() {
	const [login, setLogin] = useState({ login: "" });
	const [password, setPassword] = useState({ password: "" });

	const onSubmit = (event) => {
		event.preventDefault();
		console.log("preventDefault");
		alert(`Welcome ${login}, your new password is ${password}`);
	};
	return (
		<form onSubmit={onSubmit}>
			<header>
				<img width="40" src={shopingBag} alt="Logo" />
			</header>
			<label htmlFor="login">Login</label>
			<input
				type="text"
				name="login"
				id="login"
				onChange={(event) => setLogin(event.target.value)}
			/>
			<label htmlFor="password">password</label>
			<input
				type="password"
				name="password"
				id="password"
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button type="submit">Log in</button>
		</form>
	);
}

 */
