import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { increaseByOne } from "../../store/CartReducer";


const Details = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.products.find(item => item.id === id))


    const addToCart = () => {
        
        const cartItem = {
            id: product?.id,
            price: product?.price,
        }
        
        
        dispatch(increaseByOne(cartItem))

    }


    return ( 
        <>
        <section className="flex flex-col gap-3 p-2">
            <div>
                <img src={product?.images[0]} alt="product image" />
            </div>

            <h1 className="font-bold text-xl">{product?.name}</h1>


            <div className="flex gap-3">
                <div className="flex gap-2">
                    <span>Ціна:</span> 
                    <span><strong className="mr-1">{product?.price}</strong>грн</span>

                </div>

                <div className="flex gap-2">
                    <span>Виробник:</span>
                    <span><strong>{product?.manufacturer}</strong></span>
                </div>
            </div>

            <div className="flex gap-2">
                <p className="text-sm">{product?.description}</p>
            </div>
                
            <div className="bg-green-400 flex justify-around py-2">
                <div className="flex flex-col items-center">
                    <span>Ширина:</span>
                    <span><strong>{product?.width}</strong>см</span> 
                </div>
                <div className="flex flex-col items-center">
                    <span>Висота:</span>
                    <span><strong>{product?.height}</strong>см</span> 
                </div>
                <div className="flex flex-col items-center">
                    <span>Довжина:</span>
                    <span><strong>{product?.length}</strong>см</span> 
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button onClick={addToCart} className='px-5 py-2 rounded-full bg-green-500 w-48 text-white font-bold'>
                    Додати в кошик
                </button>

            </div>

        </section>

        <section className="">
            
        </section>


        </>

     );
}
 
export default Details;