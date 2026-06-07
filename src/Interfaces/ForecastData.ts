import type CurrentDayForecast from "./CurrentDayForecast";
import type DayForecast from "./DayForecast";
import type ForecastDataState from "./ForecastDataState";

export default interface ForecastData {
    data: any;
    location: {localtime: string, country: string, region: string, name: string},
    dayForecast: DayForecast[],
    currentData: CurrentDayForecast,
}