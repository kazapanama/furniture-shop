import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { ICartItem } from "../../../types/Cart";
import { decreaseByOne, increaseByOne } from "../../../store/CartReducer";

interface CartItemProps {
    item:ICartItem;
}


const CartItem:FC<CartItemProps> = ({item}) => {

    const product = useAppSelector(state => state.products).products.find(product => product.id === item.id)!

    const dispatch = useAppDispatch()

    const handleAdd = () => {
        const item = {id:product.id, price:product.price}
        dispatch(increaseByOne(item))
    }

    const handleRemove = () => {
        const item = {id:product.id, price:product.price}
        dispatch(decreaseByOne(item))
    }



    return ( 
        <div className="flex w-full border p-2">
            <img src={product.images[0]||'/placeholder.jpg'} alt={product.name} className='w-8 h-8 mr-2'/>
            <div className="flex flex-col gap-3 w-full">
                <span className="text-sm w-full">{product.name}</span>
                
            <div className="flex justify-between">
                <div className="w-full flex gap-2 items-center">
                        <button className="text-xl font-thin border w-5 h-5 flex justify-center items-center" onClick={handleRemove}>-</button>
                        <span className="text-lg">{item.quantity}шт.</span>
                        <button className="text-xl font-thin border w-5 h-5 flex justify-center items-center" onClick={handleAdd}>+</button>
                        
                    </div>

                    <div className="flex gap-5">
                        <span><strong>{product.price*item.quantity}</strong>грн</span>
                    </div>
            </div>

               



            </div>
            
            
        </div>        

     );
}
 
export default CartItem;