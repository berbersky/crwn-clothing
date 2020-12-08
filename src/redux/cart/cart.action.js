import { Action } from "history";
import CartActionTypes from "./carte.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
