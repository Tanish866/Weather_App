import { configureStore } from "@reduxjs/toolkit";

import ForecastReducer from "./Slices/ForecastSlice";

const store = configureStore({
    reducer: {
        forecast: ForecastReducer,
    },
    devTools: true,
});
export default store;