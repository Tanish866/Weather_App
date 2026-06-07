import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../Config/AxiosInstance";
import type ForecastDataState from "../../Interfaces/ForecastDataState";
const initialState : ForecastDataState = {
    status: 'default',
    data: undefined,
};

export const fetchData = createAsyncThunk("data/fetch", async (city: string) => {
    try {
        const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_URL}&q=bengaluru&days=7&aqi=yes&alerts=yes`);
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.log(error);
    }
});

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) =>{
            if(!action.payload) return;
        });
    }
});

export default forecastSlice.reducer;