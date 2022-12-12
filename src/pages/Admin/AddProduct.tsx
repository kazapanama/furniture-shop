import { addNewProduct } from "../../firebaseConfig/firebase";
import { useState } from "react";
import { AllProducts } from "../../Products";

const AddProduct = () => {
    
    const item:AllProducts = {
        id:String(Date.now()),
        name: '',
        price: 0,
        category: 'sofa',
        description: '',
        images: [],
    }

    const [product, setProduct] = useState(item)
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewProduct(product)
        console.log(product)
    }


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
            <button type='submit'>ADD</button>

            </form>
        </section> 
     );
}
 
export default AddProduct;