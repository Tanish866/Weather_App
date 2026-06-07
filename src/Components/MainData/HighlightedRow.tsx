import { useSelector } from "react-redux";
import HighlightCard from "../HighlightCard";
import type ReduxState from "../../Interfaces/ReduxState";

function HighlightedRow(){
    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData);
    function uvRange() {
        if(currentData.uv <= 5) return "low";
        else if(currentData.uv > 5 && currentData.uv < 8) return "moderate";
    }
    return(
        <div className="flex flex-wrap gap-4 w-full px-6 pb-6">
            <HighlightCard title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
            <HighlightCard title="Wind Status" data={currentData.wind_kmph?.toString()} footer="km/h" />
            <HighlightCard title="Humidity" data={currentData.humidity.toString() + "%"} footer="Low" />
            <HighlightCard title="Visibility" data={currentData.vis_km.toString()} footer="Low" />
            <HighlightCard title="Sunrise & Sunset" data={currentData.sunrise} footer={currentData.sunset} />
            <HighlightCard title="Air quality" data={currentData.aqi.toString()} footer="Low" />
        </div>
    );
}
export default HighlightedRow;