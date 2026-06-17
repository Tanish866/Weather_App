import sunny from "../Assets/sunny.png";
import cloudy from "../Assets/cloudy.png";
import rainy from "../Assets/rainy.jpg";
import cloudyNight from "../Assets/cloudyNight.png";

function getWeatherImage(condition: string, isDay: boolean): string {
    const c = condition.toLowerCase();
    if (c.includes("rain") || c.includes("drizzle")) return rainy;
    if (c.includes("cloud") || c.includes("overcast")) return isDay ? cloudy : cloudyNight;
    if (c.includes("sun") || c.includes("clear")) return isDay ? sunny : cloudyNight;
    return isDay ? sunny : cloudyNight;
}

function HourCard({ time, temperature, condition, is_day, unit }: {
    time: string,
    temperature: string,
    condition: string,
    is_day: boolean,
    unit: 'C' | 'F',
}) {
    return (
        <div className="flex flex-col items-center justify-between gap-3 bg-white rounded-2xl px-3 py-4 shadow-sm w-[110px]">
            <p className="font-semibold text-sm text-black">{time}</p>
            <img src={getWeatherImage(condition, is_day)} alt={condition} className="w-12 h-12" />
            <p className="text-sm font-semibold text-black">
                {temperature}°{unit} 
            </p>
        </div>
    );
}
export default HourCard;