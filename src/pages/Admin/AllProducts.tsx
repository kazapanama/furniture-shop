import { useAppSelector } from "../../hooks/useStore";
import AdminProducts from "../../components/AdminProduct/AdminProduct"; 

const AdminAllProducts = () => {
   
   const products = useAppSelector(state => state.products)
   
    return ( 
        <section>
            <h1 className="text-2xl font-bold mb-2 text-center">Список всіх продуктів</h1>
            <div>
                {products && products.map(item => (
                    <AdminProducts item={item} key={item.id}/>
                ))}
            </div>
        </section>

    )
    }
export default AdminAllProducts;