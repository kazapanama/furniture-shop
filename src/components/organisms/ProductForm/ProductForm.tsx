import { FC, useEffect, useState } from 'react';
import { addNewProduct, deleteImage, uploadFile } from '../../../firebaseConfig/firebase';
import { useAppDispatch } from '../../../hooks/useStore';
import { AllProducts } from '../../../types/Products';
import { addOne, updateOne } from '../../../store/ProducsReducer';

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

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const readyForUpload = { ...product, images: imgURLs };

    //upload to firebase
    addNewProduct(readyForUpload);
    //add to redux store
    toEdit
      ? dispatch(updateOne(readyForUpload))
      : dispatch(addOne(readyForUpload));
    //reset form
    setProduct(item);
    alert(toEdit? 'Товар відредаговано' : 'Товар додано');
    //reset images
    setImgURLs([]);
    queForDelete.forEach(async(url)=>{
      //delete images from firebase
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

  function handleX(image: string): void {
    setQueForDelete([...queForDelete, image])
    console.log(setQueForDelete)
    //removes image from the form
    const newURLs = imgURLs.filter((url) => url !== image);
    //need to add deleting!!! from firebase
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
                setProduct({ ...product, category: e.target.value })
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
                <div className="flex  gap-2 " key={image}>
                  <img src={image} className="w-12 h-12 cover" />
                  <button onClick={() => handleX(image)} className='font-bold text-2xl'>X</button>
                </div>
              ))}
            </div>

          <div className='w-full flex justify-center'>

            <button type="submit" className="border mt-2 bg-green-500 rounded-full font-bold px-5 py-2 text-white">
              {toEdit ? 'Зберегти' : 'Додати'}
            </button>
          </div>
      </form>
    </section>
  );
};

export default ProductForm;