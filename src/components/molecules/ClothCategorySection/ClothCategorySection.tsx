import { FC } from "react";
import { ClothCategoriesDictionary } from "../../../dictionaries/ClothCategories";
import { ClothCategory } from "../../../types/Products";

interface ClothCategorySectionProps {
    clothCategories: ClothCategory[];
    setClothCategories: (a: ClothCategory[]) => void;
}





const ClothCategorySection:FC<ClothCategorySectionProps> = ({clothCategories,setClothCategories}) => {
    
    const addClothCategory = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const newCategory: ClothCategory = {
            category: 'category1',
            price: 0,
        }
        setClothCategories([...clothCategories,newCategory])
    }
    
    
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>,index:number) => {
        const newCategories = [...clothCategories]
        newCategories.find((_,idx)=>index===idx)!.category = e.target.value
        setClothCategories(newCategories)
    }


    const handleNumberChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        const newCategories = [...clothCategories]
        newCategories[index].price = +e.target.value
        setClothCategories(newCategories)
    }



    return ( 
        <section className="flex flex-col gap-3">

            {clothCategories.map((category,index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="flex flex-col">
                        <label>Категорія</label>
                        <select onChange={(e)=>handleSelect(e,index)}>
                            {Object.keys(ClothCategoriesDictionary).map((key) => (
                                <option key={key} value={key}>{ClothCategoriesDictionary[key]}</option>
                            ))}
                        </select>
                    </div>


                    <div className="flex flex-col">
                        <label>Ціна</label>
                        <input type="number" value={category.price} onChange={(e) => handleNumberChange(e,index)}/>
                    </div>


                    <button>X</button>
                </div>
            ))}



            <button className="bg-slate-500"
            onClick={(e)=>addClothCategory(e)}>ADD CLOTH CATEGORY</button>
        </section>


     );
}
 
export default ClothCategorySection;