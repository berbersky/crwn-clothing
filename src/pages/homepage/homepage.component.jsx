import React from "react";
import Directory from "../../component/directory/directory.component";
import "./homepage.style.scss";

const HomePage = (props) => {
	console.log("HOMEPAGE PROPS", props);

	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default HomePage;
