import Image from "../../Assets/CloudyTemp.png";
import TempCard from "../TempCard";

function WeekRow(){
    return(
        <div className="flex items-start gap-3 w-full flex-wrap px-6 py-5">
            <TempCard title="Friday" temperature="28.5" image={Image} />
            <TempCard title="Saturday" temperature="28.5" image={Image} />
            <TempCard title="Sunday" temperature="28.5" image={Image} />
            <TempCard title="Monday" temperature="28.5" image={Image} />
            <TempCard title="Tuesday" temperature="28.5" image={Image} />
            <TempCard title="Wednesday" temperature="28.5" image={Image} />
        </div>
    );
}
export default WeekRow;