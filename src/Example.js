import HotKeyChampions from "./components/HotkeyChampions";

const champions = [
    {
        name: "Anatoly Karpov",
        nationality: "Russia",
        year: "1993-1999",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Anatoly_Karpov_2017_april.jpg",
    },
    {
        name: "Alexander Khalifman",
        nationality: "Russia",
        year: "1999-2000",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_Khalifman.jpg",
    },
    {
        name: "Viswanathan Anand",
        nationality: "India",
        year: "2000-2002",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg"
    },
    {
        name: "Ruslan Ponomariov",
        nationality: "Ukraine",
        year: "2002-2004",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/RPonomariov.jpg",
    },
    {
        name: "Rustam Kasimdzhanov",
        nationality: "Uzbekistan",
        year: "2004-2005",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Kasimdhzanov_Torino_2006.JPG",
    },
    {
        name: "Veselin Topalov",
        nationality: "2005-2006",
        year: "Bulgaria",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Veselin_Topalov_2013.jpg",
    },

];

export default function Example () {
    return (
        <ul className="divide-y divide-gray-200">
           <HotKeyChampions champions={champions} />
        </ul>
    )
}