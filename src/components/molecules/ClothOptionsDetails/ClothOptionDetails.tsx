import { FC } from "react";
import { ClothCategoriesDictionary } from "../../../dictionaries/ClothCategories";
import { ClothCategory } from "../../../types/Products";

interface ClothOptionDetailsProps {
    clothCategories: ClothCategory[];
}


const ClothOptionDetails:FC<ClothOptionDetailsProps> = ({clothCategories}) => {
    return ( 

        <section>
            <h1>Якість тканини</h1>
                <select>
                    {clothCategories.map((category,index) => (
                            <option key={index}>
                                {ClothCategoriesDictionary[category.category]}
                            </option>
                ))}
                </select>
                
                
        </section>

        
     );
}
 
export default ClothOptionDetails;