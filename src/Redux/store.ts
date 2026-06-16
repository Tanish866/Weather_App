import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./Slices/ForecastSlice";

export const store = configureStore({
    reducer: {
        forecast: forecastReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;