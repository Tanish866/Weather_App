import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Config/AxiosInstance";
import type ForecastDataState from "../../Interfaces/ForecastDataState";

const initialState: ForecastDataState = {
    status: 'default',
    data: {
        location: {
            country: '',
            region: '',
            name: '',
            localtime: '',
        },
        dayForecast: [],
        hourForecast: [], 
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

export const fetchData = createAsyncThunk(
    "data/fetch",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(
                `forecast.json?key=${import.meta.env.VITE_API_URL}&q=${city}&days=7&aqi=yes&alerts=yes`
            );
            return response.data;
        } catch (error: any) {
            console.log("API Error:", error.response?.data);
            return rejectWithValue(error.response?.data);
        }
    }
);

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                if (!action.payload) return;

                const { location, forecast, current } = action.payload;

                state.data.location.country = location?.country;
                state.data.location.region = location?.region;
                state.data.location.name = location?.name;
                state.data.location.localtime = location?.localtime;

                state.data.dayForecast = forecast.forecastday.map((forecastItem: any) => ({
                    date: forecastItem.date,
                    avgtemp_c: forecastItem.day.avgtemp_c,
                    avgtemp_f: forecastItem.day.avgtemp_f,
                    condition: forecastItem.day.condition.text,
                }));

                // ✅ added hourForecast
                state.data.hourForecast = forecast.forecastday[0].hour.map((hourItem: any) => ({
                    time: hourItem.time,
                    temp_c: hourItem.temp_c,
                    temp_f: hourItem.temp_f,
                    condition: hourItem.condition.text,
                    is_day: hourItem.is_day,
                }));

                state.data.currentData.uv = current.uv;
                state.data.currentData.wind_kmph = current.wind_kph;
                state.data.currentData.humidity = current.humidity;
                state.data.currentData.vis_km = current.vis_km;
                state.data.currentData.aqi = current.air_quality?.pm2_5 ?? 0;
                state.data.currentData.sunrise = forecast.forecastday[0].astro.sunrise;
                state.data.currentData.sunset = forecast.forecastday[0].astro.sunset;
                state.data.currentData.temp_c = current.temp_c;
                state.data.currentData.temp_f = current.temp_f;
                state.data.currentData.condition = current.condition.text;
                state.data.currentData.is_day = current.is_day;
                state.data.currentData.chance_of_rain = forecast.forecastday[0].day.daily_chance_of_rain;

                state.status = 'success';
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failure';
            });
    }
});

export default forecastSlice.reducer;