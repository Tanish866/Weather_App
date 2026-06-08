import { useSelector } from "react-redux";
import type ReduxState from "../../Interfaces/ReduxState";
import TempCard from "../TempCard";

function WeekRow() {
    const dayForecast = useSelector((state: ReduxState) => state.forecast.data.dayForecast);

    const weekdays = [
        'Sunday',  
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return (
        <div className="flex items-start gap-3 w-full flex-wrap px-6 py-5">
            {
                dayForecast && dayForecast.map((forecast: { date: string; avgtemp_c: number; condition: string }) => {
                    return (
                        <TempCard
                            key={forecast.date}
                            title={weekdays[(new Date(forecast.date)).getDay()]}
                            temperature={forecast.avgtemp_c.toString()}
                            condition={forecast.condition} 
                        />
                    );
                })
            }
        </div>
    );
}

export default WeekRow;