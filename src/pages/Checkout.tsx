
import CartItem from "../components/atoms/CartItem/CartItem";
import { useAppSelector } from "../hooks/useStore";

const Checkout = () => {
    
    const cart = useAppSelector(state => state.cart)
   
    if (cart.length === 0) return <p className="text-center">Кошик порожній</p>
    
    return ( 
        <section className="p-2">
            <div className="flex flex-col gap-2">
            
        {cart && cart.map(item=>(
            <CartItem key={item.id} item={item}/>
        ))}

            </div>

            <div className="flex flex-col">
               <span>Всього до оплати: <strong>{cart.reduce((acc, item) => acc += item.quantity * item.price, 0)}</strong> грн</span>
                <button>
                    Оформити замовлення
                </button>
            </div>

        </section>
     );
}
 
export default Checkout;