import { createSlice } from "@reduxjs/toolkit";

type RoomsSlice = {
	rooms: [] | null;
};

const roomsSlice = createSlice({
	name: "rooms",
	initialState: { rooms: [] } as RoomsSlice,
	reducers: {
		logout(state) {
			state.rooms = null;
		},
	}
});

export const { logout } = roomsSlice.actions;
export default roomsSlice.reducer;
