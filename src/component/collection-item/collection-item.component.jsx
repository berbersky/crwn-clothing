import React from "react";
import "./collection-item.style.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="collection-item">
			<span className="name">{name}</span>
			<span className="price">{price}$</span>
			<button className="addToCart">Add to cart</button>
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
