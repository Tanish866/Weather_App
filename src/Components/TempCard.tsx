import sunny from "../Assets/sunny.png";
import cloudy from "../Assets/cloudy.png";
import rainy from "../Assets/rainy.jpg";
import cloudyNight from "../Assets/cloudyNight.png";

function getWeatherImage(condition: string): string {
    const c = condition.toLowerCase();
    if (c.includes("sun") || c.includes("clear")) return sunny;
    if (c.includes("rain") || c.includes("drizzle")) return rainy;
    if (c.includes("cloud") || c.includes("overcast")) return cloudy;
    return cloudyNight;
}

function TempCard({ temperature, title, condition, unit }: {
    temperature: string,
    title: string,
    condition: string,
    unit: 'C' | 'F', 
}) {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl px-4 py-4 shadow-sm w-[150px]">
            <p className="font-semibold text-sm text-black">{title}</p>
            <img src={getWeatherImage(condition)} alt={condition} className="w-14 h-14 my-3" />
            <p className="text-sm font-semibold text-black">
                {temperature}
                <span className="text-xs">°{unit}</span> 
            </p>
        </div>
    );
}
export default TempCard;