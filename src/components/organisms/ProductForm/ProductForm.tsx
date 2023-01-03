
import { FC, useEffect, useState } from 'react';
import { addNewProduct, deleteImage, uploadFile } from '../../../firebaseConfig/firebase';
import { useAppDispatch } from '../../../hooks/useStore';
import { AdditionalSize, AllProducts, ClothCategory, ColorVariant} from '../../../types/Products';
import { addOne, updateOne } from '../../../store/ProducsReducer';
import ColorSection from '../../molecules/ColorSection/ColorSection';
import ClothCategorySection from '../../molecules/ClothCategorySection/ClothCategorySection';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonRounded from '../../atoms/ButtonRounded/ButtonRounded';
import AdditionalSizesSection from '../../molecules/AdditionalSizesSection/AdditionalSizesSection';


interface ProductFormProps {
  toEdit?: AllProducts;
}

const ProductForm: FC<ProductFormProps> = ({ toEdit }) => {
  const item: AllProducts = {
    id: String(Date.now()),
    name: '',
    display: true,
    price: 0,
    category: 'sofa',
    description: '',
    images: [],
    width: 0,
    height: 0,
    length: 0,
    manufacturer: '',
  };

  const [product, setProduct] = useState(toEdit || item);
  const [images, setImages] = useState<File[] | []>([]);
  const [imgURLs, setImgURLs] = useState<string[]>(product.images);
  const [queForDelete, setQueForDelete] = useState<string[]>([])

  const [colorOptions, setColorOptions] = useState<ColorVariant[]>(product.colors||[])
  const [clothCategories,setClothCategories] = useState<ClothCategory[]>([])
  const [additionalSizes,setAdditionalSizes] = useState<AdditionalSize[]>([])


  useEffect(()=>{
    //needed if edit page was refreshed
    if (toEdit){
      setProduct(toEdit)
    }
  },[toEdit])


  useEffect(()=>{
    //sets cloth categories if product is sofa
    if (product.category === 'sofa'){
      setClothCategories(product.clothCategories as ClothCategory[]||[])
    }
    
    //sets additional sizes if product is bedding
    if (product.category === 'bedding'){
      setAdditionalSizes(product.additionalSizes as AdditionalSize[]||[])
    }

  },[])


  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    
     const readyForUpload:AllProducts = { ...product, images: imgURLs ,};
 

       if (colorOptions.length){
        readyForUpload.colors = colorOptions as ColorVariant[];
      } else if (readyForUpload.colors) {
        delete readyForUpload.colors
      }

      if (readyForUpload.category === 'sofa') {
        if (clothCategories.length) {
          readyForUpload.clothCategories = clothCategories as ClothCategory[];
        } else {
          delete readyForUpload.clothCategories;
        }
      }

      if (readyForUpload.category === 'bedding') {
        if (additionalSizes.length) {
          readyForUpload.additionalSizes = additionalSizes as AdditionalSize[];
        } else {
          delete readyForUpload.additionalSizes;
        }
      }

    //upload to firebase
    addNewProduct(readyForUpload);
    //add to redux store
    toEdit
      ? dispatch(updateOne(readyForUpload))
      : dispatch(addOne(readyForUpload));
    //reset form and setup for new product
    
    const category = product.category;
    setProduct({...item,id:String(Date.now()),category});
    //notification for user about success
    const message = toEdit ? 'Товар відредаговано' : 'Товар додано';
    toast.success(message)
    
    //reset images
    setImgURLs([]);
    //reset colors
    setColorOptions([])
    //delete images from firebase
    queForDelete.forEach(async(url)=>{
      await deleteImage(url)
    })
    

    
  };

  useEffect(() => {
    //uploads images to firebase as soon as they are selected
    if (images) {
      images.forEach(async (image) => {
        await uploadFile(image, setImgURLs, product.id, product.category);
      });
    }
  }, [images]);

  function handleX(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,image: string): void {
    e.preventDefault();
    setQueForDelete([...queForDelete, image])
    //removes image from the form
    const newURLs = imgURLs.filter((url) => url !== image);
    setImgURLs(newURLs);
  }

  return (
    <section className="p-2 mb-5">
      
      <h1 className="font-bold text-center text-2xl mb-2">
        {toEdit ? 'Редагування товару' : 'Новий товар'}
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col mb-3">
          <label>Назва</label>
          <input
            type="text"
            required
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div className="flex mb-3 gap-3">
          <div className="flex flex-col">
            <label>Ціна(грн)</label>
            <input
              type="number"
              required
              value={product.price || ''}
              onChange={(e) =>
                setProduct({ ...product, price: +e.target.value })
              }
              className="w-24"
            />
          </div>

          <div className="flex flex-col ">
            <label>Категорія</label>
            <select
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value as AllProducts['category'] })
              }
              defaultValue={product.category}
            >
              <option value="sofa">Дивани</option>
              <option value="chair">Крісла</option>
              <option value="closet">Шафи</option>
              <option value="bed">Ліжка</option>
              <option value="bedding">Матраси</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label>Опис</label>
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className=" resize-none"
          />
        </div>

        <div className="flex w-full items-center">
          <div className="flex flex-col mb-1">
            <label>Ширина</label>
            <input
              className="w-4/6"
              type="number"
              value={product.width || ''}
              onChange={(e) =>
                setProduct({ ...product, width: +e.target.value })
              }
            />
          </div>

          <div className="flex flex-col mb-1">
            <label>Довжина</label>
            <input
              className="w-4/6"
              type="number"
              value={product.length || ''}
              onChange={(e) =>
                setProduct({ ...product, length: +e.target.value })
              }
            />
          </div>

          <div className="flex flex-col mb-1">
            <label>Висота</label>
            <input
              className="w-4/6"
              type="number"
              value={product.height || ''}
              onChange={(e) =>
                setProduct({ ...product, height: +e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label>Виробник</label>
          <input
            type="text"
            value={product.manufacturer || ''}
            onChange={(e) =>
              setProduct({ ...product, manufacturer: e.target.value })
            }
          />
        </div>


      <ColorSection setColorOptions={setColorOptions} colorOptions={colorOptions}/>

      {product.category === 'sofa' && <ClothCategorySection  clothCategories={clothCategories} setClothCategories={setClothCategories}/>}
      {product.category === 'bedding' && <AdditionalSizesSection setAdditionalSizes={setAdditionalSizes} additionalSizes={additionalSizes}/>}

        <div className="flex flex-col ">
          <label className="text-left">Вибрати зображення</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e: any) => setImages([...e.target.files])}
          />
        </div>

            <div className='flex gap-3 flex-wrap mb-2'>
              {imgURLs.map((image) => (
                <div className="flex  gap-2 border p-2" key={image}>
                  <img src={image} className="w-12 h-12 cover" />
                  <button onClick={(e) => handleX(e,image)} className='font-bold text-2xl'>X</button>
                </div>
              ))}
            </div>

          <div className='w-full flex justify-center'>
          
          <ButtonRounded text={toEdit ? 'Зберегти зміни' : 'Додати товар'} color='bg-green-400'/>
          
          </div>
      </form>
    </section>
  );
};

export default ProductForm;
