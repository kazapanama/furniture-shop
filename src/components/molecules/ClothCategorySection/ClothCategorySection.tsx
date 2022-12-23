import { FC, MouseEvent } from "react";
import { ClothCategoriesDictionary } from "../../../dictionaries/ClothCategories";
import { ClothCategory } from "../../../types/Products";

interface ClothCategorySectionProps {
    clothCategories: ClothCategory[];
    setClothCategories: (a: ClothCategory[]) => void;
}





const ClothCategorySection:FC<ClothCategorySectionProps> = ({clothCategories,setClothCategories}) => {
    
    const addClothCategory = (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        const newCategory: ClothCategory = {
            category: 'category1',
            price: 0,
        }
        setClothCategories([...clothCategories,newCategory])
    }
    
    
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>,index:number) => {
        const newCategories = [...clothCategories]
       const newItem:ClothCategory = {...newCategories.find((_,idx)=>index===idx)!}
        newItem.category = e.target.value
        newCategories[index] = newItem
        setClothCategories(newCategories)
    }


    const handleNumberChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        const newCategories = [...clothCategories]
        const newItem:ClothCategory = {...newCategories.find((_,idx)=>index===idx)!}
        newItem.price = +e.target.value
        newCategories[index] = newItem
        setClothCategories(newCategories)
    }



    const deleteCategory = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, index: number)=> {
        e.preventDefault()
        const newCategories = [...clothCategories.filter((_,idx)=>index!==idx)]
        setClothCategories(newCategories)
    }

    return ( 
        <section className="flex flex-col gap-3">

            {clothCategories.map((category,index) => (
                <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label>Категорія</label>
                        <select onChange={(e)=>handleSelect(e,index)} value={category.category}>
                            {Object.keys(ClothCategoriesDictionary).map((key) => (
                                <option key={key} value={key}>{ClothCategoriesDictionary[key]}</option>
                            ))}
                        </select>
                    </div>


                    <div className="flex flex-col">
                        <label>Ціна</label>
                        <input type="number" value={category.price||''} onChange={(e) => handleNumberChange(e,index)}/>
                    </div>


                    <button onClick={(e)=>deleteCategory(e,index)}>X</button>
                    <hr />
                </div>
            ))}



            <button className="bg-slate-500"
            onClick={(e)=>addClothCategory(e)}>ADD CLOTH CATEGORY</button>
        </section>


     );
}
 
export default ClothCategorySection;