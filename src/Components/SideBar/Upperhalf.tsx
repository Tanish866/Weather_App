import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";

import cloudyNight from "../../Assets/cloudyNight.png";
import { fetchData } from "../../Redux/Slices/ForecastSlice";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";

function Upperhalf({ tempUnit }: { tempUnit: 'C' | 'F' }) {
    const dispatch = useAppDispatch();
    const [city, setCity] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
        });
        dispatch(fetchData(city || 'Bengaluru'));
    }, [city, dispatch]);

    const currentData = useAppSelector((state) => state.forecast.data.currentData);

    function handleSearch() {
        if (inputValue.trim()) {
            setCity(inputValue.trim());
        }
    }

    return (
        <div className="h-[60%] w-full p-4 flex flex-col justify-center">
            <div className="flex rounded-2xl overflow-hidden border-2 border-sky-300">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-3/4 px-4 py-2 outline-none"
                    placeholder="Search..."
                />
                <button
                    onClick={handleSearch}
                    className="w-1/4 bg-sky-400 hover:bg-sky-500 flex cursor-pointer items-center justify-center px-4 py-2 transition-colors"
                >
                    <IoSearch className="text-white text-xl" />
                </button>
            </div>

            <div className="w-full h-[70%] flex justify-center">
                <img src={cloudyNight} className="w-[70%] h-full" alt="weather" />
            </div>

            <div className="flex flex-col items-start">
                <div className="font-semibold text-black flex items-start">
                    <div className="text-8xl">
                        {tempUnit === 'C' ? currentData.temp_c : currentData.temp_f}
                    </div>
                    <div className="text-7xl">°{tempUnit}</div>
                </div>
                <div className="text-black text-xl">
                    {currentData.condition}
                </div>
            </div>
        </div>
    );
}
export default Upperhalf;