import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { weatherReducer } from "../reducers/weatherReducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(logger ,thunk));

export type AppDispatch = typeof store.dispatch

