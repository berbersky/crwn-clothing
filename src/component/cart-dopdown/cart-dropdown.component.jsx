import React from "react";
//Routing
import { withRouter } from "react-router-dom";
//Components
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//Redux
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
//Styling
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		<section className="cart-items">
			{cartItems.length ? (
				cartItems.map((item) => <CartItem key={item.id} item={item} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</section>
		<CustomButton inverted={true} onClick={() => history.push(`/checkout`)}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
