//Pages
// import HomePage from "./homepage/homepage.component";
// import ShopPage from "./shoppage/shoppage.component";
// import SignInOutPage from "./signin-signout-page/signin-signout-page.component";
// import CheckoutPage from "./checkout/checkout.component";
// import FormBase from "./form/formBase";

// loadable component
import loadable from "@loadable/component";

// La Home est critique, elle sera dans le bundle principale
export { default as HomePage } from "./homepage/homepage.component";

// Les routes About et Contact seront chargées au besoin
export const ShopPage = loadable(() => import("./shoppage/shoppage.component"));
export const SignInOutPage = loadable(() =>
	import("./signin-signout-page/signin-signout-page.component")
);
export const CheckoutPage = loadable(() =>
	import("./checkout/checkout.component")
);
export const FormBase = loadable(() => import("./form/formBase"));

// Préchargement des routes
ShopPage.load();
SignInOutPage.load();
CheckoutPage.load();
FormBase.load();
