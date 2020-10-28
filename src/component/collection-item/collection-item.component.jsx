import React from "react";
import "./collection-item.style.scss";
import CustomButton from "./../custom-button/custom-button.component";

const CollectionItem = ({ imageUrl, name, price }) => {
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="collection-item">
			<span className="name">{name}</span>
			<span className="price">{price}$</span>
			<CustomButton>Add to cart</CustomButton>
		</div>
	);
};

export default CollectionItem;

/**
 *
 *  <img>
 *  price
 *  title
 *  addToCart
 *
 *
 */
