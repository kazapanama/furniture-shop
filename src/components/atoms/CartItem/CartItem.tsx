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
            <img src={product.images[0]} alt={product.name} className='w-8 h-8 mr-2'/>
            <div className="flex flex-col gap-3">
                <span className="text-sm">{product.name}</span>
                
                <div className="w-full flex gap-5 ">
                    <span className="text-sm">{item.quantity}ШТ</span>
                    <span><strong>{product.price*item.quantity}</strong>грн</span>
                </div>

            </div>
            
            <div className="flex gap-5">
                <button className="text-4xl font-bold" onClick={handleAdd}>+</button>
                <button className="text-4xl font-bold" onClick={handleRemove}>-</button>
            </div>
        </div>        

     );
}
 
export default CartItem;