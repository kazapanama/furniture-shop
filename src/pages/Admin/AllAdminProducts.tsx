import { useAppSelector } from "../../hooks/useStore";
import AdminProducts from "../../components/molecules/AdminProduct/AdminProduct"; 
import { setTitle } from "../../helpers/GeneralFunctions";
import { useEffect, useState } from "react";
import { AllProducts } from "../../types/Products";
import SearchAndFilters from "../../components/atoms/SearchAndFilters/SearchAndFilters";

const AdminAllProducts = () => {
   setTitle('Всі продукти');

   const productsItems = useAppSelector(state => state.products).products

   const [filterText,setFilterText] = useState<string>('')
   const [products,setProducts] = useState<AllProducts[]>(productsItems||[])
   const [filteredCategories,setFilteredCategories] = useState<string[]>([])

   useEffect(() => {
    setProducts(productsItems)
}, [productsItems])

useEffect(() => {

    const filteredByCategory = filteredCategories.length > 0 ? productsItems.filter(item => filteredCategories.includes(item.category)) : productsItems


    const filteredByName = filteredByCategory.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
    setProducts(filteredByName)
},[filterText,filteredCategories])



   
   const visibleProducts = products.filter(item => item.display)
   const hiddenProducts = products.filter(item => !item.display)

    return ( 
        <section>
            <h1 className="text-2xl font-bold mb-2 text-center">Список всіх товарів</h1>
            {products && <SearchAndFilters setFilterText={setFilterText} filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories}/>}
            
            <div>
                <h2>ВИДИМІ</h2>
                {visibleProducts.length === 0 ? <p>Немає видимих продуктів</p> : null}
                {visibleProducts.map(item => (
                    <AdminProducts item={item} key={item.id} type='visible'/>
                    ))}
                    <hr />
            </div>

            <div>
                    <h2>Приховані</h2>
                    {hiddenProducts.length === 0 ? <p>Немає пирхованих товарів</p> : null}
                {hiddenProducts.map(item => (
                    <AdminProducts item={item} key={item.id} type='hidden'/>
                ))}
                <hr />
            </div>


        </section>

    )
    }
export default AdminAllProducts;