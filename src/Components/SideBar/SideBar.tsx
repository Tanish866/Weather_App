import { useState } from "react";
import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./Upperhalf";

function SideBar({ tempUnit }: { tempUnit: 'C' | 'F' }) { 
    return (
        <div className="basis-3/12 h-full text-black flex justify-center flex-col rounded-tl-3xl rounded-bl-3xl items-center" style={{ background: 'rgba(255, 255, 255, 0.815)' }}>
            <Upperhalf tempUnit={tempUnit} />
            <div className="h-[1px] bg-white w-[85%] mt-2 rounded-md"></div>
            <Lowerhalf />
        </div>
    );
}
export default SideBar;