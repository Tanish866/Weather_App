import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../Config/AxiosInstance";
import type ForecastDataState from "../../Interfaces/ForecastDataState";

const initialState : ForecastDataState = {
    status: 'default',
    data: {
        location: {
            country: '',
            region: '',
            name: '',
            localtime: '',
        },
        dayForecast: [],
        currentData: {
            uv: 0,
            wind_kmph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            sunrise: '',
            sunset: '',
            temp_c: 0,
            temp_f: 0,
            condition: '',
            is_day: false,
            chance_of_rain: 0,
        },
    }
};

export const fetchData = createAsyncThunk("data/fetch", async () => {
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
            console.log(action);

            const {location, forecast, current} = action.payload;
            // setting location
            state.data.location.country = location?.country;
            state.data.location.region = location?.region;
            state.data.location.name = location?.name;
            state.data.location.localtime = location?.localtime;

            // setting dayforecast
            state.data.dayForecast = forecast.forecastday.map((forecastItem : any) =>{
                return{
                    date: forecastItem.date,
                    avgtemp_c: forecastItem.day.avgtemp_c,
                    avgtemp_f: forecastItem.day.avgtemp_f,
                    condition: forecastItem.day.condition.text,
                }
            });

            // setting currrent
            state.data.currentData.uv = current.uv;
            state.data.currentData.wind_kmph = current.wind_kmph;
            state.data.currentData.humidity = current.humidity;
            state.data.currentData.vis_km = current.vis_km;
            state.data.currentData.aqi = current.air_quality.pm2_5;
            state.data.currentData.sunrise = forecast.forecastday[0].astro.sunrise;
            state.data.currentData.sunset = forecast.forecastday[0].astro.sunset;
            state.data.currentData.temp_c = current.temp_c;
            state.data.currentData.temp_f = current.temp_f;
            state.data.currentData.condition = current.condition.text;
            state.data.currentData.is_day = current.is_day;
            state.data.currentData.chance_of_rain = forecast.forecastday[0].day.daily_chance_of_rain;
            
        })
        .addCase(fetchData.pending, (state) =>{
            state.status = 'loading';
        });
    }
});

export default forecastSlice.reducer;