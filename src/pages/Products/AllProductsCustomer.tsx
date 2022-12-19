import SearchAndFilters from "../../components/atoms/SearchAndFilters/SearchAndFilters";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/useStore";

const  AllProductsCustomer = () => {
    const products = useAppSelector(state => state.products).filter(item => item.display)
    
    
    if (products.length === 0) {
        return <p>Немає продуктів</p>
    }  
    
    
    return ( 

        
        
        
        <section className="relative">
        <SearchAndFilters />
        <div className="">
            {products.map(item => (
                <ProductCard item={item} key={item.id} />
            ))}

        </div>
        </section>
       
       



     );
}
 
export default AllProductsCustomer ;