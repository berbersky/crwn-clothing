import React from "react";
// Icon SVG
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
//Styling
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

const mapDispatchProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
