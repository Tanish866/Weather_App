import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./Upperhalf";

function SideBar(){
    return (
        <div className="basis-3/12 h-full text-black flex justify-center flex-col rounded-tl-3xl rounded-bl-3xl items-center" style={{background: 'rgba(255, 255, 255, 0.815)'}}>
            <Upperhalf/>
            <Lowerhalf/>  
        </div>
    );
}
export default SideBar;