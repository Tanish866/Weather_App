import { createSlice } from "@reduxjs/toolkit";

import type ForecastDataState from "../../Interfaces/ForecastDataState";

const initialState : ForecastDataState = {
    status: 'default',
    data: undefined,
};

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: () => {
         
    }
});

export default forecastSlice.reducer;