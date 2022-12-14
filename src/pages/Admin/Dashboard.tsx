import { Link } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import { useAppDispatch } from "../../hooks/useStore";
import { logoutUser } from "../../store/UserReducer";
import { setTitle } from "../../helpers/GeneralFunctions";

const Dashboard = () => {

    setTitle('Адмін панель');
    const dispatch = useAppDispatch()
    
    const logout = () => {
        dispatch(logoutUser())
    }
    
    return ( 
    
    <section className="flex flex-col gap-12 w-full justify-center">
        <div className="flex flex-col gap-5 items-center">
            <Link to='/admin/add' className="font-bold text-2xl">Додати новий товар</Link>
            <Link to='/admin/products' className="font-bold text-2xl">Список всіх товарів</Link>
            <Link to='/admin/orders' className="font-bold text-2xl">Замовлення</Link>
            <ButtonRounded text='logout' onClick={logout} color='bg-red-400'/>
        </div>
        
    </section>

    );
}
 
export default Dashboard;