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
        display:true,
        price: 0,
        category: 'sofa',
        description: '',
        images: [],
        width: 0,
        height: 0,
        length: 0,
        manufacturer: '',
    }
    
    const [product, setProduct] = useState(toEdit||item)
    const [images, setImages] = useState<File[] | []>([]);
    const [imgURLs, setImgURLs] = useState<string[]>(product.images);

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const readyForUpload = {...product, images:imgURLs}
       
        //upload to firebase
        addNewProduct(readyForUpload)
        //add to redux store
        dispatch(addOne(readyForUpload))
        //reset form
        setProduct(item)
        alert('Товар додано')
        //reset images 
        setImgURLs([])
    
    }
    
    
    useEffect(() => {
        //uploads images to firebase as soon as they are selected
        if (images) {
          images.forEach(async (image) => {
            await uploadFile(image,setImgURLs,product.id,product.category);
          });
        }
      }, [images]);
    
    
    
      function handleX(image: string): void {
        //removes image from the form
        const newURLs = imgURLs.filter((url) => url !== image);
        //need to add deleting!!! from firebase
        setImgURLs(newURLs);
      }
    

    return (
        <section className="p-2">
            <h1>{toEdit ? 'EDIT PRODUCT':'ADD NEW PRODUCT'}</h1>
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
                    <option value="bedding">Матрас</option>
                </select>
            </div>
    
            <div className="flex w-full items-center">
                <div className="flex flex-col mb-1">
                    <label >Ширина</label>
                    <input className="w-4/6" type="number" value={product.width || ''} onChange={(e)=>setProduct({...product, width:+e.target.value})}/>
                </div>

                <div className="flex flex-col mb-1">
                    <label >Довжина</label>
                    <input className="w-4/6" type="number" value={product.length || ''} onChange={(e)=>setProduct({...product, length:+e.target.value})}/>
                </div>

                <div className="flex flex-col mb-1">
                    <label >Висота</label>
                    <input className="w-4/6" type="number" value={product.height || ''} onChange={(e)=>setProduct({...product, height:+e.target.value})}/>
                </div>
            </div>
            
            <div className="flex flex-col mb-3">
                    <label >Виробник</label>
                    <input type="text" value={product.manufacturer || ''} onChange={(e)=>setProduct({...product, manufacturer:e.target.value})}/>
                </div>


            <div className="flex flex-col ">
          <label className="text-left">Вибрати зображення</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e:any ) =>  setImages([ ...e.target.files ] )}
    
          />
        </div>
        
        
       {imgURLs.map(image=>(
              <div className="flex  gap-2 ">
                <img  src={image} key={image} className='w-20 h-20 cover'/>
                <button onClick={()=>handleX(image)}>X</button>
            </div>
       ))}
    
            <button type='submit' className="border mt-2">ADD</button>
    

            </form>
        </section> 
     );
}


export default ProductForm;
