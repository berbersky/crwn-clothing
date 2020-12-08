import React from "react";
//Components
import CustomButton from "./../custom-button/custom-button.component";

//Styling
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
	<div className="cart-dropdown">
		<section className="cart-items">{/* items */}</section>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);
export default CartDropdown;
