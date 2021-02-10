import React from "react";
//Styling
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
	const { price, name, imageUrl, quantity } = item;
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item"></img>
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} X {price} $ = {quantity * price} $
				</span>
			</div>
		</div>
	);
};

export default CartItem;
