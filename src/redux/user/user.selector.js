import { createSelector } from "reselect";

// Input selector: return just a piece of state
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);
