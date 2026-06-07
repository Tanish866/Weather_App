function HighlightCard({ footer, data, title }: { footer: string, data: string, title: string }) {
    return (
        <div className="flex flex-col justify-between bg-white rounded-2xl px-4 py-4 shadow-sm min-h-[180px] w-[30%]">
            <div className="text-xl text-gray-400 font-medium">{title}</div>
            <div className="text-4xl font-semibold text-black text-center">{data}</div>
            <div className="text-lg text-black">{footer}</div>
        </div>
    );
}
export default HighlightCard;