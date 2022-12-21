import { Link, useParams } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import ImagesSlider from "../../components/atoms/ImagesSlider/ImagesSlider";
import Loader from "../../components/atoms/Loader/Loader";

import SizesSection from "../../components/molecules/SizesSection/SizesSection";
import { ColorsDictionary } from "../../dictionaries/Colors";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { increaseByOne } from "../../store/CartReducer";


const Details = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const productsData = useAppSelector(state => state.products)
    const product = productsData.products.find(item => item.id === id)


    const addToCart = () => {
        
        const cartItem = {
            id: product?.id,
            price: product?.price,
        }
        
        dispatch(increaseByOne(cartItem))
    }


    if (productsData.loading){
        return (
            <Loader />
        )
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

               {
                product.manufacturer && <div className="flex gap-2">
                <span>Виробник:</span>
                <span><strong>{product?.manufacturer}</strong></span>
            </div>
               } 
            </div>


       <SizesSection width={product.width} length={product.length} height={product.height}/>

       <div className="w-full flex justify-center">
           <ButtonRounded text='Додати в кошик' onClick={addToCart}/>
       </div>

        
        
       {product.colors ? <div className="flex flex-col bg-slate-100 gap-3">

            <span>Доступні кольори:</span> 
            <div className="flex gap-3 pb-2">
                {product.colors.map((option,index)=><div key={index} className='w-12 h-12 border' style={{backgroundColor:ColorsDictionary[option.color][1]}}></div>)} 
            </div>
            </div>            
              : null}






            <div className="flex gap-2">
                <p className="text-sm">{product?.description}</p>
            </div>
                
          

        </section>

        <section className="">
            
        </section>


        </>

     );
}
 
export default Details;