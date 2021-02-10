import { createSelector } from "reselect";
// Input selector: return just a piece of state
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem = {}) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);