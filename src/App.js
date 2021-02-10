import React, { Component } from "react";
//Routing
import { Switch, Route, Redirect } from "react-router-dom";
//Componets
import Header from "./component/header/header.component";
//Pages
// import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shoppage/shoppage.component";
// import SignInOutPage from "./pages/signin-signout-page/signin-signout-page.component";
// import CheckoutPage from "./pages/checkout/checkout.component";
// import FormBase from "./pages/form/formBase";
import * as Routes from "./pages/Route";
// Styling
import "./App.css";
//Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

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
	// whith-out redux
	// constructor() {
	// 	super();
	// 	this.state = { currentUser: null };
	// }

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// null : when we signOut
				const userRef = await createUserProfileDocument(userAuth); // a ref to users document in firestore
				userRef.onSnapshot((snapShot) => {
					//console.table("onSnapshot: ", snapShot.data());
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} //if
			else {
				setCurrentUser(userAuth);
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
				{/*  whith out redux <Header currentUser={this.state.currentUser} /> */}
				{/* whith redux */}
				<Header />
				<Switch>
					<Route path="/" exact component={Routes.HomePage} />
					<Route path="/shop" exact component={Routes.ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<Routes.SignInOutPage />
							)
						}
					/>
					<Route path="/checkout" exact component={Routes.CheckoutPage} />
					<Route path="/login" exact component={Routes.FormBase} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user: { currentUser } }) => ({
	currentUser,
});
const mapDispatchProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
