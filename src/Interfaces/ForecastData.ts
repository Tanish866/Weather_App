import type CurrentDayForecast from "./CurrentDayForecast";
import type DayForecast from "./DayForecast";

export default interface ForecastData {
    location: {localtime: string, country: string, region: string, name: string};
    dayForecast: DayForecast[];
    currentData: CurrentDayForecast;
};