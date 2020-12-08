import React from "react";
import "./collection-item.style.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="collection-item">
			<span className="name">{name}</span>
			<span className="price">{price}$</span>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchProps)(CollectionItem);
