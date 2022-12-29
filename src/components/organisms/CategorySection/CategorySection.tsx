
import { FC } from "react";
import { AllProducts } from "../../../types/Products";
import LinkRounded from "../../atoms/LinkRounded/LinkRounded";
import ProductCard from "../../molecules/ProductCard/ProductCard";



interface CategorySectionProps {
    title: string;
    items: AllProducts[];
}


const CategorySection:FC<CategorySectionProps> = ({title,items}) => {


  return ( 
        <section className="p-2 flex flex-col">
            <h2 className="text-2xl my-5 ml-2">Новинки в категорії <strong>{title}</strong></h2>
   
        

          <div className=" flex flex-col mb-2 gap-2 md:flex-wrap md:flex-row md:m-auto md:w-full md:justify-center">
            {items && items.map(item => <ProductCard item={item} key={item.id}/>)}
            <div className="flex md:h-96 justify-center items-center w-full md:w-72">
              <LinkRounded to='/products/' text='Переглянути всі товари' color="bg-teal-400"/>
            </div>
          </div>
           
        </section>
     );
}
 
export default CategorySection;