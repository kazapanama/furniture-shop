import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import ImagesSlider from "../../components/atoms/ImagesSlider/ImagesSlider";
import Loader from "../../components/atoms/Loader/Loader";
import ClothOptionDetails from "../../components/molecules/ClothOptionsDetails/ClothOptionDetails";

import SizesSection from "../../components/molecules/SizesSection/SizesSection";
import { ColorsDictionary } from "../../dictionaries/Colors";
import { deleteProduct } from "../../firebaseConfig/firebase";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { increaseByOne } from "../../store/CartReducer";
import { deleteOne } from "../../store/ProducsReducer";
import { ICartItem, ICartSubmit } from "../../types/Cart";


const Details = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const productsData = useAppSelector(state => state.products)
    const product = productsData.products.find(item => item.id === id)
    const admin = useAppSelector(state => state.user).email

    const [activeColor,setActiveColor] = useState(product?.colors ? product?.colors[0].color:'')

    // const [clothOptions,setClothOptions] = useState()



    const addToCart = () => {
        if (!product) return

        const cartItem:ICartSubmit = {
            id: product.id,
            price: product.price
        }

        if (activeColor){
            cartItem.color = activeColor as string
        }

        dispatch(increaseByOne(cartItem))
    }

    const deleteIfAdmin =()=> {
        if (!product) return

        if (confirm('Видалити товар?')){
            deleteProduct(product.id)
            dispatch(deleteOne(product.id))
        }
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

            <h1 className="font-bold text-xl">{product.name}</h1>


            <div className="flex gap-3">
                <div className="flex gap-2">
                    <span>Ціна:</span> 
                    <span><strong className="mr-1">{product.price}</strong>грн</span>

                </div>

               {
                product.manufacturer && <div className="flex gap-2">
                <span>Виробник:</span>
                <span><strong>{product.manufacturer}</strong></span>
            </div>
               } 
            </div>


       <SizesSection width={product.width} length={product.length} height={product.height}/>

       <div className="w-full flex justify-center">
           <ButtonRounded text='Додати в кошик' onClick={addToCart}/>
       </div>

        
        
       {product.colors ? <div className="flex flex-col bg-slate-500 gap-3">

            <span>Доступні кольори:</span> 
            <div className="flex gap-3 pb-2">
                {product.colors.map((option,index)=><div key={index} className={'w-12 h-12 border rounded-md'+ (activeColor===option.color ? ' w-16 h-16 border-green-500':'')} style={{backgroundColor:ColorsDictionary[option.color][1]}}
                onClick={()=>{
                    setActiveColor(option.color)
                    console.log(option.color)
                }}></div>)} 
            </div>
            </div>            
              : null}


        {product.category === 'sofa' && product.clothCategories ? <ClothOptionDetails clothCategories={product.clothCategories}/> : null}



            <div className="flex gap-2">
                <p className="text-sm">{product?.description}</p>
            </div>
                
          

        </section>

        <section className="">
            {admin ? 
            <div className="w-full flex justify-center items-center gap-5">

                <ButtonRounded text='Delete' onClick={()=>deleteIfAdmin()}/>
                <Link to={'/admin/product/'+product.id}>EDIT</Link>
            </div>

            
            :null}
        </section>


        </>

     );
}
 
export default Details;