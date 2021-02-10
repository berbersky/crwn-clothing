import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dopdown/cart-dropdown.component";
// Routing
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selector";
// Styling and SVG
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crownLogo.svg";
// Firebase
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => {
	return (
		<header className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<nav className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/shop" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div
						className="profile"
						style={{ backgroundImage: `url(${currentUser.photoURL})` }}
						onClick={() => {
							const option = document.querySelector(".profile>.option");
							option.classList.toggle("active");
						}}>
						<div className="option" onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					</div>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</nav>
			{hidden ? null : <CartDropdown />}
		</header>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});
export default connect(mapStateToProps, null)(Header);
