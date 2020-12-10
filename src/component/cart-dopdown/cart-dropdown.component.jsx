import React from "react";
//Components
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//Redux
import { connect } from "react-redux";

//Styling
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<section className="cart-items">
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</section>
		<CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
