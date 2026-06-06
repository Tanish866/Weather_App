import HighlightedRow from "./HighlightedRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData(){
    return (
        <div className="flex w-full flex-col justify-between items-center basis-9/12 text-black bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl h-full" >
            <TopRow/>
            <WeekRow/>
            <div>
                Today's Highlighted
            </div>
            <HighlightedRow/>
        </div>
    );
}
export default MainData;