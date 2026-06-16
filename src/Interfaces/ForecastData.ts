import type CurrentDayForecast from "./CurrentDayForecast";
import type DayForecast from "./DayForecast";
import type HourForecast from "./HourForecast";

export default interface ForecastData {
    location: {
        localtime: string,
        country: string,
        region: string,
        name: string
    },
    dayForecast: DayForecast[],
    hourForecast: HourForecast[],
    currentData: CurrentDayForecast,
}