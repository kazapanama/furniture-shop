import { useAppSelector } from "../../hooks/useStore";
import AdminProducts from "../../components/AdminProduct/AdminProduct"; 

const AdminAllProducts = () => {
   
   const products = useAppSelector(state => state.products).products
   
   const visibleProducts = products.filter(item => item.display)
   const hiddenProducts = products.filter(item => !item.display)

    return ( 
        <section>
            <h1 className="text-2xl font-bold mb-2 text-center">Список всіх продуктів</h1>
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
                    {hiddenProducts.length === 0 ? <p>Немає скритих продуктів</p> : null}
                {hiddenProducts.map(item => (
                    <AdminProducts item={item} key={item.id} type='hidden'/>
                ))}
                <hr />
            </div>


        </section>

    )
    }
export default AdminAllProducts;