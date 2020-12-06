import React from "react";
// Routing
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
// Styling
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crownLogo.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
			</nav>
		</header>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
