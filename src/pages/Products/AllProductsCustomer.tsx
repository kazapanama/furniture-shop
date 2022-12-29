import { useEffect, useState } from "react";
import Loader from "../../components/atoms/Loader/Loader";
import SearchAndFilters from "../../components/atoms/SearchAndFilters/SearchAndFilters";
import ProductCard from "../../components/molecules/ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/useStore";
import { AllProducts } from "../../types/Products";


const  AllProductsCustomer = () => {
    
    const [filterText,setFilterText] = useState<string>('')
    const [products,setProducts] = useState<AllProducts[]>([])
    const [filteredCategories,setFilteredCategories] = useState<string[]>([])


    const productsData = useAppSelector(state => state.products)
    const displayedProducts = productsData.products.filter(item => item.display)
    



    useEffect(() => {
        setProducts(displayedProducts)
    }, [productsData])

    useEffect(() => {

        const filteredByCategory = displayedProducts.filter(item => !filteredCategories.includes(item.category))


        const filteredByName = filteredByCategory.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
        setProducts(filteredByName)
    },[filterText,filteredCategories])


    
   if (productsData.loading) {
         return <Loader />
   }

   if (productsData.error) {
            return <p>Не вдалося завантажити список товарів</p>
   }



    
    return ( 
        

        <section className="relative min-h-screen">
            {products && <SearchAndFilters setFilterText={setFilterText} filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories}/>}
            
            
            {products.length === 0 && !productsData.loading && <p>Немає продуктів за даними критеріями</p>}
            
            <div className="flex flex-wrap gap-5 justify-center mt-4">
                {products.length>0 && products.map(item => (
                    <ProductCard item={item} key={item.id} />
                ))}

            </div>
        </section>
       
       



     );
}
 
export default AllProductsCustomer ;