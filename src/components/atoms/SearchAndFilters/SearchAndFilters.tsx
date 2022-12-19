const SearchAndFilters = () => {
    return ( 
        <div className="relative w-full">
            
            <div className="flex justify-center gap-5 bg-green-300 static  w-full p-2">
                <button >
                    <img src="/icons/filter.svg" alt="search" className="w-6 h-6"/>
                </button>
                <input type="text" placeholder="Пошук" />
            </div>
        </div>
    
     );
}
 
export default SearchAndFilters;