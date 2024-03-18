import { Wrapper } from "./SearchBar.style";


const SearchBar : React.FC = ({placeholder}:any) => {
    function handleSearch(term:string) {
        console.log(term);
    }

    return (
        <Wrapper>
            <div className="flex justify-center">
                <input
                    type="text"
                    className="w-1/2 border-2 border-gray-300 p-2 rounded-lg mr-4"
                    placeholder="Search for recipe"
                    value= {placeholder}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-2/4"
                >
                    Search
                </button>
            </div>
        </Wrapper>
    )
}

export default SearchBar;