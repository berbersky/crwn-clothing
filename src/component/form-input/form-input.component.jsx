import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, value, ...rest }) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...rest} />
		{label ? (
			<label className={`${value ? "shrink" : ""} form-input-label`}>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;