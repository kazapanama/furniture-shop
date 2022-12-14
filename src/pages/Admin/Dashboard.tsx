import { Link } from "react-router-dom";

const Dashboard = () => {
    return ( 
    
    <section className="flex w-full justify-center">
        <div className="flex flex-col gap-5">
        <Link to='/admin/add' className="font-bold text-2xl">Додати новий товар</Link>
        <Link to='/admin/products' className="font-bold text-2xl">Список всіх товарів</Link>
        <Link to='/admin/orders' className="font-bold text-2xl">Замовлення</Link>

        </div>
    
    </section>

    );
}
 
export default Dashboard;