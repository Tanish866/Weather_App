import { useEffect } from "react";

import Image from "../Assets/image.jpg";
import MainData from "../Components/MainData/MainData";
import SideBar from "../Components/SideBar/SideBar";
import { useAppDispatch } from "../Hooks/useAppDispatch";
import { fetchData } from "../Redux/Slices/ForecastSlice";

function Home(){

    const dispatch = useAppDispatch();
    function loadData(){
        const response = dispatch(fetchData());
        console.log(response);
    }

    useEffect(() =>{
        loadData();
    }, []);
    return(
        <div className="h-[100vh]" style={{backgroundSize: 'cover', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`}}>
            <div className="h-full mx-8 py-8 flex flex-row justify-center items-center">
                <SideBar/>
                <MainData/>
            </div>
            
        </div>
    );
}
export default Home;