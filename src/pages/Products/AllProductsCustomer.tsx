import { useEffect, useState } from "react";
import SearchAndFilters from "../../components/atoms/SearchAndFilters/SearchAndFilters";
import ProductCard from "../../components/molecules/ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/useStore";
import { AllProducts } from "../../types/Products";


const  AllProductsCustomer = () => {
    
    const [filterText,setFilterText] = useState<string>('')
    const [products,setProducts] = useState<AllProducts[]>([])

    const productsData = useAppSelector(state => state.products)
    
    
    const displayedProducts = productsData.products.filter(item => item.display)
    



    useEffect(() => {
        setProducts(displayedProducts)
    }, [productsData])

    useEffect(() => {




        const filteredByName = displayedProducts.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
        setProducts(filteredByName)
    },[filterText])


    
   if (productsData.loading) {
         return <p>Завантаження...</p>
   }

   if (productsData.error) {
            return <p>ШОСЬ НЕ ТАК</p>
   }



    
    return ( 
        

        <section className="relative min-h-screen">
            {products && <SearchAndFilters setFilterText={setFilterText}/>}
            
            
            {products.length === 0 && <p>Немає продуктів за даними критеріями</p>}
            
            <div className="">
                {products.length>0 && products.map(item => (
                    <ProductCard item={item} key={item.id} />
                ))}

            </div>
        </section>
       
       



     );
}
 
export default AllProductsCustomer ;