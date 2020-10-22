import React from "react";
import "./menuItem.style.scss";

const MenuItem = ({ title, imageUrl, size }) => {
	console.log(size);
	return (
		<article className={`menu-item ${size}`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url( ${imageUrl} )`,
				}}>
				<div className="content">
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</article>
	);
};

export default MenuItem;
