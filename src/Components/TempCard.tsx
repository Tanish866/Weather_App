function TempCard({ temperature, title, image }: { temperature: string, title: string, image: string }){
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl px-4 py-4 shadow-sm w-[150px]">
            <p className="font-semibold text-sm text-black">{title}</p>
            <img src={image} alt={title} className="w-14 h-14 my-3" />
            <p className="text-sm font-semibold text-black">
                {temperature}
                <span className="text-xs">°C</span>
            </p>
        </div>
    );
}
export default TempCard;