import { FC } from "react";
import { AllProducts } from "../../Products";
import ProductCard from "../ProductCard/ProductCard";



interface CategorySectionProps {
    title: string;
    items: AllProducts[];
}


const CategorySection:FC<CategorySectionProps> = ({title,items}) => {

  //@ts-ignore
  title * 10


  return ( 
        <section className="p-2 border flex flex-col ">
            <h2 className="text-4xl font-bold my-5 ml-2">{title}</h2>
   
        

          <div className=" flex flex-col mb-2 gap-2 md:flex-wrap md:flex-row md:m-auto md:w-full">
            {items && items.map(item => <ProductCard item={item} key={item.id}/>)}
          </div>
           
        </section>
     );
}
 
export default CategorySection;