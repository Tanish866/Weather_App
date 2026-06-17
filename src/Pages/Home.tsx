import { useState } from "react";
import Image from "../Assets/image.jpg";
import MainData from "../Components/MainData/MainData";
import SideBar from "../Components/SideBar/SideBar";

function Home() {
    const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C'); 

    return (
        <div
            className="h-[100vh]"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`
            }}
        >
            <div className="h-full mx-8 py-8 flex flex-row justify-center items-center">
                <SideBar tempUnit={tempUnit} />
                <MainData tempUnit={tempUnit} onUnitChange={setTempUnit} />
            </div>
        </div>
    );
}
export default Home;