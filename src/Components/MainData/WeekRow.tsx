import { useAppSelector } from "../../Hooks/useAppSelector";
import TempCard from "../TempCard";

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function WeekRow() {
    const dayForecast = useAppSelector((state) => state.forecast.data.dayForecast);

    return (
        <div className="flex items-start gap-3 w-full flex-wrap px-6 py-5">
            {dayForecast && dayForecast.map((forecast) => (
                <TempCard
                    key={forecast.date}
                    title={weekdays[new Date(forecast.date).getDay()]}
                    temperature={forecast.avgtemp_c.toString()}
                    condition={forecast.condition}
                />
            ))}
        </div>
    );
}
export default WeekRow;