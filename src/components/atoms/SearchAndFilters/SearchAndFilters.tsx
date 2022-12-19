import Filters from "../Filters/Filters";
import { useState } from "react";

const SearchAndFilters = () => {
    

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        console.log('clicked')

    }
    
    
    
    
    return ( 
        <>
            <div className="relative w-full">
                
                <div className="flex justify-center gap-5 bg-green-300 static  w-full p-2">
                    <button onClick={()=>setIsOpen(!isOpen)}>
                        <img src="/icons/filter.svg" alt="search" className="w-6 h-6"/>
                    </button >
                    <input type="text" placeholder="Пошук" />
                </div>
            </div>

            {isOpen && < Filters setIsOpen={setIsOpen}/>}
        </>
    


     );
}
 
export default SearchAndFilters;