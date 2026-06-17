function TopRow({ activeTab, onTabChange, tempUnit, onUnitChange }: {
    activeTab: 'today' | 'week',
    onTabChange: (tab: 'today' | 'week') => void,
    tempUnit: 'C' | 'F',
    onUnitChange: (unit: 'C' | 'F') => void,
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
                <div
                    onClick={() => onUnitChange('C')}
                    className={`w-9 h-9 rounded-full flex p-5 items-center justify-center text-lg font-bold cursor-pointer transition-colors ${
                        tempUnit === 'C' ? 'bg-black text-white' : 'text-gray-800'
                    }`}
                >
                    °C
                </div>
                <div
                    onClick={() => onUnitChange('F')}
                    className={`w-9 h-9 rounded-full flex p-5 items-center justify-center text-lg font-bold cursor-pointer transition-colors ${
                        tempUnit === 'F' ? 'bg-black text-white' : 'text-gray-800'
                    }`}
                >
                    °F
                </div>
            </div>
        </div>
    );
}
export default TopRow;