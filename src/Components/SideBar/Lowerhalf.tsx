import { BsDropletFill } from "react-icons/bs";
import { IoIosCloudy } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { useAppSelector } from "../../Hooks/useAppSelector"; 

function Lowerhalf() {
    const currentData = useAppSelector((state) => state.forecast.data.currentData);
    const location = useAppSelector((state) => state.forecast.data.location);

    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-between">
            <div>
                <div className="flex items-start gap-4 my-2">
                    <div className="mt-1">
                        <IoIosCloudy />
                    </div>
                    <div>{currentData.condition}</div>
                </div>
                <div className="flex items-start gap-4 my-2">
                    <div className="mt-1">
                        <BsDropletFill />
                    </div>
                    <div>perc - {currentData.chance_of_rain}%</div>
                </div>
            </div>
            <div className="flex items-center text-black gap-2 mt-auto">
                <MdLocationPin />
                <span>{location.region}, {location.name}, {location.country}</span>
            </div>
        </div>
    );
}
export default Lowerhalf;