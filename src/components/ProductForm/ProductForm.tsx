import { FC, useEffect, useState } from "react";
import { addNewProduct, uploadFile } from "../../firebaseConfig/firebase";
import { useAppDispatch } from "../../hooks/useStore";
import { AllProducts } from "../../Products";
import { addOne } from "../../store/ProducsReducer";

interface ProductFormProps {
    toEdit?: AllProducts;
}


const ProductForm:FC<ProductFormProps> = ({toEdit}) => {
    
    const item:AllProducts = {
        id:String(Date.now()),
        name: '',
        price: 0,
        category: 'sofa',
        description: '',
        images: [],
    }
    
    const [product, setProduct] = useState(toEdit||item)
    const [images, setImages] = useState<File[] | []>([]);
    const [imgURLs, setImgURLs] = useState<string[]>(item?.images ? item.images : []);
    const [test,setTest] = useState<any>('')

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const readyForUpload = {...product, images:imgURLs}
       
        //upload to firebase
        addNewProduct(readyForUpload)
        //reset form
        setProduct(item)
        //add to redux store
        dispatch(addOne(readyForUpload))
        alert('Товар додано')
        //reset images 
        setImgURLs([])
    
    }
    
    
    useEffect(() => {
    
        if (images) {
          images.forEach(async (image) => {
            await uploadFile(image,setImgURLs,item.id);
          });
        }
      }, [images]);
    
    
    
    
    return (
        <section className="p-2">
            <h1>ADD NEW PRODUCT</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
    
            <div className="flex flex-col mb-3">
                <label >Назва товару</label>
                <input type="text" value={product.name} onChange={(e)=>setProduct({...product, name:e.target.value})}/>
            </div>
    
            <div className="flex flex-col mb-3">
                <label >Ціна</label>
                <input type="number" value={product.price || ''} onChange={(e)=>setProduct({...product, price:+e.target.value})}/>
            </div>
    
            <div className="flex flex-col mb-3">
                <label >Опис</label>
                <textarea value={product.description} onChange={(e)=>setProduct({...product, description:e.target.value})}/>
            </div>
    
            <div className="flex flex-col mb-3">
                <label >Категорія</label>
                <select onChange={(e) => setProduct({ ...product, category: e.target.value })}
                defaultValue={product.category}>
                    <option value="sofa">Диван</option>
                    <option value="chair">Крісло</option>
                    <option value="closet">Шафа</option>
                    <option value="bed">Ліжко</option>
                </select>
            </div>
    
    
            <div className="flex flex-col ">
          <label className="text-left">Вибрати зображення</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e:any ) =>  setImages([ ...e.target.files ] )}
    
          />
    
        {imgURLs.map(image=><img  src={image} className='w-20 h-20 cover'/>)}     
        </div>
    
            <button type='submit'>ADD</button>
    
        <input type="file" onChange={(e:any)=>{
                setTest(URL.createObjectURL(e.target.files[0]))
                console.log(test)
        }}/>
        {test && <img src={test}></img>}


            </form>
        </section> 
     );
}


export default ProductForm;