function HotkeyChampionItem ({champion}) {
    return (
        <li key={champion.name} className="py-4 flex">
                <img className="h-10 w-10 rounded-full" src={champion.image} alt={champion.name}/>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{champion.name} - {champion.year}</p>
                    <p className="text-sm text-gray-500">{champion.nationality}</p>
                </div>
            </li>
    )
}

export default function HotKeyChampions({champions}) {
    return (
        <ul className="divide-y divide-gray-200">
            {champions.map((champion) => <HotkeyChampionItem key={champion.id} champion={champion } />)}
        </ul>
    )
}