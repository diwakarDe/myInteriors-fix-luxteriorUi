import { createSlice } from "@reduxjs/toolkit";

type TicketsSlice = {
	tickets: [] | null;
};

const ticketsSlice = createSlice({
	name: "tickets",
	initialState: { tickets: [] } as TicketsSlice,
	reducers: {
		logout(state) {
			state.tickets = null;
		},
	}
});

export const { logout } = ticketsSlice.actions;
export default ticketsSlice.reducer;
