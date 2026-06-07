import HighlightedRow from "./HighlightedRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData(){
    return (
        <div className="flex flex-col justify-start items-center basis-9/12 text-black bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl h-full overflow-y-auto overflow-x-hidden w-full">
            <TopRow/>
            <WeekRow/>
            <div className="px-6 py-2 w-full font-bold text-2xl">
                Today's Highlights
            </div>
            <HighlightedRow/>
        </div>
    );
}
export default MainData;