import { FC } from "react";
import { AllProducts } from "../../Products";
import ProductCard from "../ProductCard/ProductCard";



interface CategorySectionProps {
    title: string;
    items: AllProducts[];
}


const CategorySection:FC<CategorySectionProps> = ({title,items}) => {
    return ( 
        <section className="p-2 border">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
          
          <div className=" flex flex-col mb-2 gap-2 md:flex-wrap md:flex-row md:items-center">
            {items && items.map(item => <ProductCard item={item} key={item.id}/>)}
          </div>
           
        </section>
     );
}
 
export default CategorySection;