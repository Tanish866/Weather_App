import HighlightCard from "../HighlightCard";
import { useAppSelector } from "../../Hooks/useAppSelector";

function HighlightedRow({ tempUnit }: { tempUnit: 'C' | 'F' }) { 
    const currentData = useAppSelector((state) => state.forecast.data.currentData);

    function uvRange(): string {
        if (currentData.uv <= 5) return "low";
        else if (currentData.uv < 8) return "moderate";
        else return "high";
    }

    return (
        <div className="flex flex-wrap gap-4 w-full px-6 pb-6">
            <HighlightCard title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
            <HighlightCard title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h" />
            <HighlightCard title="Humidity" data={currentData.humidity.toString() + "%"} footer="Low" />
            <HighlightCard title="Visibility" data={currentData.vis_km.toString()} footer="km" />
            <HighlightCard title="Sunrise & Sunset" data={currentData.sunrise} footer={currentData.sunset} />
            <HighlightCard title="Air quality" data={currentData.aqi.toFixed(1)} footer="PM2.5" />
        </div>
    );
}
export default HighlightedRow;