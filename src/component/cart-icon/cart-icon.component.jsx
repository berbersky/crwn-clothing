import React from "react";
// Icon SVG
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.action";
//Styling
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchProps)(CartIcon);
