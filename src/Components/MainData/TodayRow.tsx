import { useAppSelector } from "../../Hooks/useAppSelector";
import HourCard from "../HourCard";

function formatHour(time: string): string {
    const date = new Date(time.replace(' ', 'T'));
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
}

function TodayRow({ tempUnit }: { tempUnit: 'C' | 'F' }) {
    const hourForecast = useAppSelector((state) => state.forecast.data.hourForecast);

    return (
        <div className="flex items-start gap-3 w-full flex-wrap px-6 py-5">
            {hourForecast && hourForecast.map((hour) => (
                <HourCard
                    key={hour.time}
                    time={formatHour(hour.time)}
                    temperature={tempUnit === 'C'  
                        ? hour.temp_c.toString()
                        : hour.temp_f.toString()
                    }
                    unit={tempUnit}
                    condition={hour.condition}
                    is_day={hour.is_day}
                />
            ))}
        </div>
    );
}
export default TodayRow;