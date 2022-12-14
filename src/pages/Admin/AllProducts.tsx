import { useAppSelector } from "../../hooks/useStore";
import AdminProducts from "../../components/AdminProduct/AdminProduct"; 

const AdminAllProducts = () => {
   
   const products = useAppSelector(state => state.products)
   
    return ( 
        <section>
            <h1>List Of All Products</h1>
            {products && products.map(item => (
                <AdminProducts item={item} />
            ))}
        </section>

    )
    }
export default AdminAllProducts;