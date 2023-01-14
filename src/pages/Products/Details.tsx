import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonRounded from "../../components/atoms/ButtonRounded/ButtonRounded";
import ImagesSlider from "../../components/atoms/ImagesSlider/ImagesSlider";
import Loader from "../../components/atoms/Loader/Loader";
import ClothOptionDetails from "../../components/molecules/ClothOptionsDetails/ClothOptionDetails";
import SizesSection from "../../components/molecules/SizesSection/SizesSection";
import { ColorsDictionary } from "../../dictionaries/Colors";
import { deleteImage, deleteProduct } from "../../firebaseConfig/firebase";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { increaseByOne } from "../../store/CartReducer";
import { deleteOne } from "../../store/ProducsReducer";
import {ICartSubmit } from "../../types/Cart";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkRounded from "../../components/atoms/LinkRounded/LinkRounded";
import AdditionalSizesDetails from "../../components/molecules/AdditionalSizesDetails/AdditionalSizesDetails";
import { setTitle } from "../../helpers/GeneralFunctions";




const Details = () => {
    const {id} = useParams();
    setTitle(`Деталі товару ${id}`)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const productsData = useAppSelector(state => state.products)
    const product = productsData.products.find(item => item.id === id)
    const admin = useAppSelector(state => state.user).email

    const [basePrice,setBasePrice] = useState(product && product.price ? product.price : 0)
    const [activeClothCategory,setActiveClothCategory] = useState('')
    const [activeColor,setActiveColor] = useState(product?.colors ? product?.colors[0].color:'')

    const [activeDimesions,setActiveDimensions] = useState<{width:number,length:number}>({
        width: product?.width ? product?.width : 0,
        length: product?.length ? product?.length : 0
    })






    useEffect(()=>{
        //set first color as active if there are colors
        if (!product) return


        if (product.width){
            setActiveDimensions({...activeDimesions,width:product.width})
        }

        if (product.length){
            setActiveDimensions({...activeDimesions,length:product.length})
        }

        if (product.colors){
            setActiveColor(product.colors[0].color)
        }
        //re-set base price if page is refreshed
        setBasePrice(product.price)


        //re-set cloth category and price for sofas with them
        if (product?.category === 'sofa'){
            if (product?.clothCategories){
                setActiveClothCategory(product?.clothCategories?.[0].category)
                setBasePrice(product.clothCategories[0].price)
            }
            
        }



    },[product])

    const addToCart = () => {
        if (!product) return

        const cartItem:ICartSubmit = {
            id: product.id,
            price: basePrice
        }

        if (activeColor){
            cartItem.color = activeColor 
        }

        if (Object.keys(activeDimesions).length){
            cartItem.dimensions = {...activeDimesions} 
        }


        if (activeClothCategory){
            cartItem.clothCategory = activeClothCategory 
        }
        console.log(cartItem)
        toast.success('Товар додано в кошик')
        dispatch(increaseByOne(cartItem))
    }

    const deleteIfAdmin =()=> {
        if (!product) return

        if (confirm('Видалити товар?')){
            //deleting product from db
            deleteProduct(product.id)
            //removing product from store
            dispatch(deleteOne(product.id))
            //deleting images from storage
            product.images.forEach(async(url)=>{
                await deleteImage(url)
              })
            
            toast.success('Товар видалено',{
                onClose: () => navigate('/')
            })
        }


    }

    const resetPriceAndDimensions = () => {
        if (!product) return

        setBasePrice(product.price)
        setActiveDimensions({
            width: product.width||0,
            length: product.length||0
        })
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


            <div className="flex gap-2">
                <p className="text-sm">{product?.description}</p>
            </div>


            <div className="flex gap-3">
                <div className="flex gap-2">
                    <span>Ціна:</span> 
                    <span><strong className="mr-1">{basePrice}</strong>грн</span>

                </div>

               {
                product.manufacturer && <div className="flex gap-2">
                <span>Виробник:</span>
                <span><strong>{product.manufacturer}</strong></span>
            </div>
               } 
            </div>


       <SizesSection width={activeDimesions.width} length={activeDimesions.length} height={product.height}/>

       

        
        
       {product.colors ? <div className="flex flex-col  gap-3 p-2">

            <span className="text-md">Доступні кольори:</span> 
            <div className="flex gap-3 pb-2 bg-slate-100 p-2">
                {product.colors.map((option,index)=><div key={index} className={'w-12 h-12 border rounded-md'+ (activeColor===option.color ? ' w-16 h-16 border-green-500 border-4':'')} style={{backgroundColor:ColorsDictionary[option.color][1]}}
                onClick={()=>{
                    setActiveColor(option.color)
                }}></div>)} 
            </div>
            </div>            
              : null}


        {product.category === 'sofa' && product.clothCategories ? <ClothOptionDetails clothCategories={product.clothCategories} setBasePrice={setBasePrice} setActiveClothCategory={setActiveClothCategory}/> : null}
        {product.category === 'bedding' && product.additionalSizes ? <AdditionalSizesDetails additionalSizes={product.additionalSizes} resetPriceAndDimensions={resetPriceAndDimensions} setBasePrice={setBasePrice} activeDimesions={activeDimesions} setActiveDimensions={setActiveDimensions}/>:null}

        <div className="w-full flex justify-center">
           <ButtonRounded text='Додати в кошик' onClick={addToCart}/>
       </div>
            
                
          

        </section>

        <section className="mb-5">
            {admin ? 
            <div className="w-full flex justify-center items-center gap-5">

                <LinkRounded text='Редагувати' to={'/admin/product/'+product.id} color='bg-green-400'/>
                <ButtonRounded text='Видалити' onClick={()=>deleteIfAdmin()} color='bg-red-400'/>
            </div>

            
            :null}
            {admin ? <div>
                <span>Взято з <strong>{product.origin||'Невідомо'}</strong></span>
            </div>
            :null}
        </section>


        </>

     );
}
 
export default Details;