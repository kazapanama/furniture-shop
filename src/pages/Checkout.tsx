
import ButtonRounded from "../components/atoms/ButtonRounded/ButtonRounded";
import CartItem from "../components/atoms/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { resetToEmpty } from "../store/CartReducer";

const Checkout = () => {

    const dispatch = useAppDispatch()

    const handleCheckout = () => {
        console.log('Замовлення додано')
        dispatch(resetToEmpty())
    }


    
    const cart = useAppSelector(state => state.cart)
   
    if (cart.length === 0) return (<p className="text-center">Ви досі нічого не обрали 🥺</p>)
    
    return ( 
        <section className="p-2">
            <div className="flex flex-col gap-2 mb-2">
            
        {cart && cart.map(item=>(
            <CartItem key={item.id} item={item}/>
        ))}

            </div>

            <div className="flex flex-col gap-5">
               <span>Всього до оплати: <strong>{cart.reduce((acc:number, item) => acc += item.quantity * item.price, 0)}</strong> грн</span>
              
                <ButtonRounded text='Оформити замовлення' onClick={handleCheckout}/>
            </div>

        </section>
     );
}
 
export default Checkout;