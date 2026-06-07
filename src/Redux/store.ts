import { configureStore } from "@reduxjs/toolkit";

import ForecastReducer from "./Slices/ForecastSlice";

const store = configureStore({
    reducer: {
        forecast: ForecastReducer,
    },
    devTools: true,
});

export const ApiDispatch = typeof store.dispatch;

export default store;