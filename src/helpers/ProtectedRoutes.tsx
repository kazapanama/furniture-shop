import { Outlet } from "react-router";
import Login from '../pages/Admin/Login'
import { useAppSelector } from "../hooks/useStore";





const ProtectedRoutes = () => {

    const user = useAppSelector(store=>store.user)

    return ( 
        user.email ? <Outlet /> : <Login />
     );
}
 
export default ProtectedRoutes;