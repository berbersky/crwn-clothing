import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./component/header/header.component";
import SignInOut from "./pages/signin-signout-page/signin-signout-page.component";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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

class App extends Component {
	constructor() {
		super();
		this.state = { currentUser: null };
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// null : when we signOut
				const userRef = await createUserProfileDocument(userAuth); // a ref to users document in firestore
				userRef.onSnapshot((snapShot) => {
					//console.table("onSnapshot: ", snapShot.data());
					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						}
						// () => {
						// 	console.log(this.state);
						// }
					);
				});
			} //if
			else {
				this.setState({ currentUser: userAuth });
				console.log("userAuth: ", userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" exact component={ShopPage} />
					<Route path="/signin" exact component={SignInOut} />
				</Switch>
			</div>
		);
	}
}

export default App;
