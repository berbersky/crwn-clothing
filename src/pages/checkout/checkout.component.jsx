import React from "react";
//Redux
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart.selectors";

//Styling
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems }) => {
	console.log("cartItems", cartItems);
	return (
		<div className="checkout-page">
			<header className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</header>
			<section className="products">
				{cartItems.length ? (
					cartItems.map(({ id, name, imageUrl, price, quantity }) => (
						<div
							key={id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								flexBasis: "20%",
							}}>
							<img
								src={imageUrl}
								alt={name}
								width="60px"
								style={{ marginTop: "10px", marginRight: "-2rem" }}
							/>
							<span style={{ marginLeft: "-2rem" }}>{name}</span>
							<span style={{ marginLeft: "-2rem" }}>{quantity}</span>
							<span style={{ marginLeft: "-2rem" }}>{price}</span>
							<span style={{ marginLeft: "-2rem" }}>x</span>
						</div>
					))
				) : (
					<div>The cart is empty!</div>
				)}
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CheckoutPage);
