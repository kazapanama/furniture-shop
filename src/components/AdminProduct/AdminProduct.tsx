import { AllProducts } from '../../Products';
import { FC } from 'react';
import {Link} from 'react-router-dom';
import { deleteProduct } from '../../firebaseConfig/firebase';
import { deleteOne } from '../../store/ProducsReducer';
import { useAppDispatch } from '../../hooks/useStore';

interface AdminProductProps {
  item: AllProducts;
}

const AdminProduct: FC<AdminProductProps> = ({ item }) => {

  const dispatch = useAppDispatch();  

  const handleDelete = async (id: string) => {
   if (confirm('Are you sure you want to delete this product?')){
     await deleteProduct(id);
     dispatch(deleteOne(id));
     alert('Product deleted');
   }
}


  return (
    <div  className="mb-2">
      <div className='flex items-center gap-3'>
        <img src={item.images && item.images.length > 0 ? item.images[0]:'/placeholder.png'} alt={item.name + 'image'} 
        className='w-12 h-12 object-cover'/>
        <h2>{item.name}</h2>
      </div>
      <div className='flex justify-center gap-3 pb-2'>
        <button onClick={()=>handleDelete(item.id)}>delete</button>
        <Link to={'/admin/product/'+item.id}>edit</Link>
        <button>hide</button>
      </div>
      <hr />
    </div>
  );
};

export default AdminProduct;
