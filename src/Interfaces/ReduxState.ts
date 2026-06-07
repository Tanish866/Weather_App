import type ForecastData from "./ForecastData";

export default interface ReduxState{
    forecast : ForecastData;
    data: ForecastData;
}