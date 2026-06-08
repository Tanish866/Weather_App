import Image from '../Assets/CloudyTemp.png';
function TempCard({ temperature, title, condition }: { 
    temperature: string, 
    title: string, 
    condition: string   
}) {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl px-4 py-4 shadow-sm w-[120px]">
            <p className="font-semibold text-sm text-black">{title}</p>
            <img 
                src={Image}  
                alt={condition} 
                className="w-14 h-14 my-3" 
            />
            <p className="text-sm font-semibold text-black">
                {temperature}
                <span className="text-xs">°C</span>
            </p>
        </div>
    );
}
export default TempCard;