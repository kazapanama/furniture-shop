import { Link } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import { useAppDispatch } from "../../hooks/useStore";
import { logoutUser } from "../../store/UserReducer";
import { setTitle } from "../../helpers/GeneralFunctions";
import DashboardItem from "../../components/atoms/DashboardItem/DashboardItem";

const Dashboard = () => {

    setTitle('Адмін панель');
    const dispatch = useAppDispatch()
    
    const logout = () => {
        dispatch(logoutUser())
    }
    
    return ( 
    
    <section className="flex flex-col gap-12 w-full justify-center">
        <div className="flex flex-col gap-5 items-center">
            <DashboardItem title='Додати товар' to='/admin/add' icon='plus'/>
            <DashboardItem title='Список товарів' to='/admin/products' icon='list'/>
            <DashboardItem title='Замовлення' to='/admin/orders' icon='cartDone'/>
            <ButtonRounded text='logout' onClick={logout} color='bg-red-400'/>
        </div>
        
    </section>

    );
}
 
export default Dashboard;