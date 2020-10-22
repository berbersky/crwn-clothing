import React from "react";
import "./homepage.style.scss";

const HomePage = () => (
	<div className="homepage">
		<section className="directory-menu">
			<article className="menu-item">
				<div className="content">
					<h1 className="title">HATS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</article>

			<article className="menu-item">
				<div className="content">
					<h1 className="title">JACKETS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</article>

			<article className="menu-item">
				<div className="content">
					<h1 className="title">SNEAKERS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</article>

			<article className="menu-item">
				<div className="content">
					<h1 className="title">WOMENS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</article>

			<article className="menu-item">
				<div className="content">
					<h1 className="title">MANS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</article>
		</section>
	</div>
);

export default HomePage;
