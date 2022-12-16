import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useStore";

const CartIcon = () => {
   
   const cart = useAppSelector(state => state.cart)
   
    return ( 
        <Link to='/checkout' className="relative border border-white p-2 rounded-full">
        
            {cart.length > 0 && <div className=" absolute right-0 bottom-0 bg-red-500 rounded-full text-xs w-4 h-4 text-white flex justify-center items-center">
                {cart.length}
            </div>}
            <img src="/icons/cart.png" alt="cart icon" className="w-6 h-6 object-cover"/>
        </Link>
     );
}
 
export default CartIcon;