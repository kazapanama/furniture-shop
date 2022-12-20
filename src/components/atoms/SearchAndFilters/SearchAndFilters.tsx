import Filters from "../Filters/Filters";
import { FC, useState } from "react";


interface SearchAndFiltersProps {
    setFilterText: (text: string) => void;
}



const SearchAndFilters:FC<SearchAndFiltersProps> = ({setFilterText}) => {
    

    const [isOpen, setIsOpen] = useState(false)



    
    return ( 
        <>
            <div className="relative w-full">
                
                <div className="flex justify-center gap-5 bg-green-300 static  w-full p-2">
                    <button onClick={()=>setIsOpen(!isOpen)}>
                        <img src="/icons/filter.svg" alt="search" className="w-6 h-6"/>
                    </button >
                    <input type="text" placeholder="Пошук" onChange={(e)=>setFilterText(e.target.value)}/>
                </div>
            </div>

            {isOpen && < Filters setIsOpen={setIsOpen}/>}
        </>
    


     );
}
 
export default SearchAndFilters;