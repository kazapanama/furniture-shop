import { Link, useParams } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import ImagesSlider from "../../components/atoms/ImagesSlider/ImagesSlider";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { increaseByOne } from "../../store/CartReducer";


const Details = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.products).products.find(item => item.id === id)


    const addToCart = () => {
        
        const cartItem = {
            id: product?.id,
            price: product?.price,
        }
        
        dispatch(increaseByOne(cartItem))
    }

    if (!product){
        return (
            <section className="w-full flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl text-bold">Товар не знайдено</h1>
                <Link to='/'>Повернутися на <strong className="text-green-500">Головну</strong></Link>
            </section>
        )
    }

    return ( 
        <>
        <section className="flex flex-col gap-3 p-2">
            <div>
                <ImagesSlider images={product.images}/>
               
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
                
            <div className=" flex justify-around py-2">
           
                <div className="flex flex-col items-center bg-slate-200 p-2 rounded-md">
                    <span>Ширина:</span>
                    <span><strong>{product?.width}</strong>см</span> 
                </div>

                <div className="flex flex-col items-center bg-slate-200 p-2 rounded-md">
                    <span>Висота:</span>
                    <span><strong>{product?.height}</strong>см</span> 
                </div>

                <div className="flex flex-col items-center bg-slate-200 p-2 rounded-md">
                    <span>Довжина:</span>
                    <span><strong>{product?.length}</strong>см</span> 
                </div>

            </div>

            <div className="w-full flex justify-center">
    

            <ButtonRounded text='Додати в кошик' onClick={addToCart}/>
            </div>

        </section>

        <section className="">
            
        </section>


        </>

     );
}
 
export default Details;