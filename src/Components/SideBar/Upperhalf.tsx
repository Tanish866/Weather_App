import { IoSearch } from "react-icons/io5";

import cloudyNight from "../../Assets/cloudyNight.png";

function Upperhalf() {
    return (
        <div className="h-[60%] w-full p-4 flex flex-col justify-center ">
            <div className="flex  rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-2xl overflow-hidden border-2 border-sky-300">
                <input
                    type="text"
                    className="w-3/4 px-4 py-2 outline-none"
                    placeholder="Search..."
                />
                <button className="w-1/4 bg-sky-400 hover:bg-sky-500 flex cursor-pointer items-center justify-center px-4 py-2 transition-colors">
                    <IoSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="w-full h-[70%] flex justify-center"> 
                <img 
                    src={cloudyNight} 
                    className="w-[70%] h-full"
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="font-semibold l text-black flex items-start">
                    <div className="text-8xl">28.4</div>
                    <div className="text-7xl">°C</div>
                </div>
                <div className="text-black text-xl">
                    Friday, 9:34
                </div>
            </div>
        </div>
    );
}

export default Upperhalf;