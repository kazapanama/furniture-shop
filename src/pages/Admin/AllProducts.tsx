import { useAppSelector } from "../../hooks/useStore";
import AdminProducts from "../../components/AdminProduct/AdminProduct"; 

const AdminAllProducts = () => {
   
   const products = useAppSelector(state => state.products)
   
   const visibleProducts = products.filter(item => item.display)
   const hiddenProducts = products.filter(item => !item.display)

    return ( 
        <section>
            <h1 className="text-2xl font-bold mb-2 text-center">Список всіх продуктів</h1>
            <div>
                <h1>ВИДИМІ</h1>
                {visibleProducts.map(item => (
                    <AdminProducts item={item} key={item.id} type='visible'/>
                    ))}
            </div>

            <div>
                    <h1>СКРИТІ</h1>
                {hiddenProducts.map(item => (
                    <AdminProducts item={item} key={item.id} type='hidden'/>
                ))}
            </div>


        </section>

    )
    }
export default AdminAllProducts;