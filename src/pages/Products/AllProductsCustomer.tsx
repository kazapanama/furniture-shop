import { useEffect, useState } from "react";
import SearchAndFilters from "../../components/atoms/SearchAndFilters/SearchAndFilters";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/useStore";
import { AllProducts } from "../../types/Products";


const  AllProductsCustomer = () => {
    
    const productsData = useAppSelector(state => state.products)
    
    
    const aaa = productsData.products.filter(item => item.display)
    
    const [products,setProducts] = useState<AllProducts[]>([])



    useEffect(() => {
        setProducts(aaa)
    }, [productsData])




    
   if (productsData.loading) {
         return <p>Завантаження...</p>
   }

   if (productsData.error) {
            return <p>ШОСЬ НЕ ТАК</p>
   }

    
    return ( 

        
        <section className="relative">
        {products && <SearchAndFilters />}
        <div className="">
            {products.length>0 && products.map(item => (
                <ProductCard item={item} key={item.id} />
            ))}

        </div>
        </section>
       
       



     );
}
 
export default AllProductsCustomer ;