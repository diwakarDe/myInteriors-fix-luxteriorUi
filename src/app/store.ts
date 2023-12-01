import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rtkQueryErrorLogger } from "../services/middlewares/errorMiddleware";
import profileSlice from "../services/slices/profile";
import expertsSlice from "../services/slices/experts";
import ticketsSlice from "../services/slices/tickets";
import roomsSlice from "../services/slices/rooms";
import { authApi } from "../services/authServices";
import { expertsApi } from "../services/designerServices";
import { ticketsApi } from "../services/ticketsServices";
import { roomsApi } from "../services/roomsServices";
import { paymentsApi } from "../services/paymentServices";

const persistConfig = {
	key: "root",
	whitelist: ["profile"],
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	profile: profileSlice,
	counter: counterReducer,
	expert: expertsSlice,
	ticket: ticketsSlice,
	rooms: roomsSlice,
	[authApi.reducerPath]: authApi.reducer,
	[expertsApi.reducerPath]: expertsApi.reducer,
	[ticketsApi.reducerPath]: ticketsApi.reducer,
	[roomsApi.reducerPath]: roomsApi.reducer,
	[paymentsApi.reducerPath]: paymentsApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([
			rtkQueryErrorLogger,
			expertsApi.middleware,
			authApi.middleware,
			ticketsApi.middleware,
			roomsApi.middleware,
			paymentsApi.middleware
		]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
