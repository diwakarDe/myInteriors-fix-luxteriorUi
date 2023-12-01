import { createSlice } from "@reduxjs/toolkit";

type ExpertsSlice = {
	experts: [] | null;
};

const expertsSice = createSlice({
	name: "experts",
	initialState: { experts: [] } as ExpertsSlice,
	reducers: {
		logout(state) {
			state.experts = null;
		},
	}
});

export const { logout } = expertsSice.actions;
export default expertsSice.reducer;
