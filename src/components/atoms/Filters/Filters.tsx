import { FC } from "react";
import { CategoriesDictionary } from "../../../dictionaries/Categories";

interface FilerProps {
    setIsOpen:(a:boolean)=>void
    filteredCategories: string[];
    setFilteredCategories: (categories: string[]) => void;
}




const Filters:FC<FilerProps> = ({setIsOpen,filteredCategories,setFilteredCategories}) => {

    const categories = Object.keys(CategoriesDictionary);


    const handleCategoryClick = (category: string) => {

        if (filteredCategories.includes(category)) {
            setFilteredCategories(filteredCategories.filter(item => item !== category))
        } else {
            setFilteredCategories([...filteredCategories, category])
        }
    }

    return ( 
        <div className="bg-white w-screen h-screen fixed top-0 left-0 z-50 flex flex-col p-5">
            <button onClick={(e)=>{
                e.stopPropagation()
                setIsOpen(false)
            }}
            className='text-4xl font-bold mb-12 text-teal-400'>x</button>
            <div className="w-full flex flex-wrap gap-5 justify-center">
                { categories.map(item => (
                        <button key={item}
                        className={filteredCategories.includes(item) ? 'p-2 border rounded-full border-slate-500':'p-2 border rounded-full text-white font-bold border-slate-500 bg-teal-400'}
                        onClick={()=>handleCategoryClick(item)}
                        >
                            {CategoriesDictionary[item]}</button>
                ))}
            </div>
              

        </div>
     );
}
 
export default Filters;