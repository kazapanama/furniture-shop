import { FC } from "react";
import { CategoriesDictionary } from "../../../dictionaries/Categories";

interface FilerProps {
    setIsOpen:(a:boolean)=>void
}




const Filters:FC<FilerProps> = ({setIsOpen}) => {

    const categories = Object.keys(CategoriesDictionary);




    return ( 
        <div className="bg-white w-screen h-screen fixed top-0 left-0 z-50 flex flex-col p-5">
            <button onClick={(e)=>{
                e.stopPropagation()
                setIsOpen(false)
            }}
            className='text-4xl mb-12 text-green-500'>x</button>
            <div className="w-full flex flex-wrap gap-5 justify-center">
                { categories.map(item => (
                        <button key={item}
                        className='p-2 border rounded-full border-slate-500'>{CategoriesDictionary[item]}</button>
                ))}
            </div>
              

        </div>
     );
}
 
export default Filters;