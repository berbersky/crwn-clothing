import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";

import "./App.css";

// function HatsPage(props) {
// 	//let { pathname } = useLocation();
// 	let { url } = useRouteMatch();
// 	// console.log("match", match);
// 	// console.log("HATS_PAGE PROPS", props);
// 	// console.log("location", pathname);
// 	return (
// 		<div>
// 			<h1> HATS PAGE </h1>
// 			<Link to={`${url}/13`}> > TO TOPIC 13</Link>
// 			<Link to={`${url}/15`}> > TO TOPIC 15</Link>
// 			<Link to={`${url}/17`}> > TO TOPIC 17</Link>
// 		</div>
// 	);
// }

// const HatsDaitailsPage = (props) => {
// 	// console.log("HATS_DAITAIL_PAGE PROPS", props);
// 	//let param = useParams();
// 	//console.log("id ", JSON.stringify(param)); param is an object param={id : '12'}
// 	// useParams instaid of props.match.params.id
// 	let { id } = useParams();
// 	return (
// 		<div>
// 			<h1> HATS DAITAILS PAGE {id}</h1>
// 		</div>
// 	);
// };

const App = () => (
	<div className="App">
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/shop" exact component={ShopPage} />
		</Switch>
	</div>
);

export default App;
