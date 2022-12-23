import { FC } from "react";
import { ClothCategoriesDictionary } from "../../../dictionaries/ClothCategories";
import { ClothCategory } from "../../../types/Products";

interface ClothOptionDetailsProps {
    clothCategories: ClothCategory[];
    setBasePrice:(price:number) => void;
    setActiveClothCategory:(category:string) => void;
}


const ClothOptionDetails:FC<ClothOptionDetailsProps> = ({clothCategories,setBasePrice,setActiveClothCategory}) => {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setBasePrice(+e.target.value)
        const exact = clothCategories.find(item=>item.price===+e.target.value)!.category
        setActiveClothCategory(exact)
    }


    return ( 

        <section >
            <h1>Якість тканини</h1>
                <select onChange={(e)=>handleChange(e)}>
                    {clothCategories.map((category,index) => (
                            <option key={index} value={category.price} data-category={category.category}>
                                {ClothCategoriesDictionary[category.category]} - {category.price} грн
                            </option>
                ))}
                </select>
                
                
        </section>

        
     );
}
 
export default ClothOptionDetails;