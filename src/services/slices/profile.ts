import { AUTH_TOKEN } from "../../constants";
import { authApi } from "./../authServices";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
	user: any | null;
	token: string | null;
};

const profileSlice = createSlice({
	name: "profile",
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		logout(state) {
			state.token = null;
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.loginUser.matchFulfilled,
			(state, { payload }) => {
				payload = { ...payload }
				state.token = payload.token;
				state.user = payload.user;
				localStorage.setItem(AUTH_TOKEN, payload.token);
			}
		);
	},
});

export const { logout } = profileSlice.actions;
export default profileSlice.reducer;
