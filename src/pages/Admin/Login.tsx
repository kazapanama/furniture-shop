import LoginAdmin from "../../components/molecules/LoginAdmin/LoginAdmin";
import { setTitle } from "../../helpers/GeneralFunctions";
const  Login = () => {
    setTitle('Авторизація');
    return ( <LoginAdmin /> );
}
 
export default Login ;