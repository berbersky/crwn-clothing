import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crownLogo.svg";

const Header = (props) => {
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
				<Link to="/shop" className="option">
					SING IN
				</Link>
			</nav>
		</header>
	);
};

export default Header;
