function TopRow({ activeTab, onTabChange }: {
    activeTab: 'today' | 'week',
    onTabChange: (tab: 'today' | 'week') => void
}) {
    return (
        <div className="flex justify-between items-center w-full px-8 py-6 border-b border-gray-200">
            <div className="flex gap-6">
                <div
                    onClick={() => onTabChange('today')}
                    className={`font-semibold text-xl cursor-pointer ${
                        activeTab === 'today' ? 'text-sky-400' : 'text-black'
                    }`}
                >
                    Today
                </div>
                <div
                    onClick={() => onTabChange('week')}
                    className={`font-semibold text-xl cursor-pointer ${
                        activeTab === 'week' ? 'text-sky-400' : 'text-black'
                    }`}
                >
                    Week
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-black text-white flex p-5 items-center justify-center text-lg font-bold cursor-pointer">
                    °C
                </div>
                <div className="w-9 h-9 rounded-full text-gray-800 flex items-center p-5 justify-center text-xl font-bold cursor-pointer">
                    °F
                </div>
            </div>
        </div>
    );
}
export default TopRow;