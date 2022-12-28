import Filters from "../Filters/Filters";
import { FC, useState } from "react";


interface SearchAndFiltersProps {
    setFilterText: (text: string) => void;
    filteredCategories: string[];
    setFilteredCategories: (categories: string[]) => void;
}



const SearchAndFilters:FC<SearchAndFiltersProps> = ({setFilterText,filteredCategories,setFilteredCategories}) => {
    

    const [isOpen, setIsOpen] = useState(false)



    
    return ( 
        <>
            <div className="relative w-full">
                
                <div className="flex justify-center gap-5 bg-teal-500 static  w-full p-2">
                    <button onClick={()=>setIsOpen(!isOpen)}>
                        <img src="/icons/filter.svg" alt="search" className="w-6 h-6"/>
                    </button >
                    <input type="text" placeholder="Пошук" onChange={(e)=>setFilterText(e.target.value)}/>
                </div>
            </div>

            {isOpen && < Filters setIsOpen={setIsOpen} filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories}/>}
        </>
    


     );
}
 
export default SearchAndFilters;