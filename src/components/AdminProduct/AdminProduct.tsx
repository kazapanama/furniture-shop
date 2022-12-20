import { AllProducts } from '../../types/Products';
import { FC } from 'react';
import {Link} from 'react-router-dom';
import { deleteImage, deleteProduct } from '../../firebaseConfig/firebase';
import { addOne, deleteOne, updateOne } from '../../store/ProducsReducer';
import { useAppDispatch } from '../../hooks/useStore';
import { changeVisibility } from '../../firebaseConfig/firebase';

interface AdminProductProps {
  item: AllProducts;
  type:'hidden'|'visible'
}

const AdminProduct: FC<AdminProductProps> = ({ item,type }) => {

  const dispatch = useAppDispatch();  

  const handleDelete = async (id: string,images:string[]) => {
   if (confirm('Are you sure you want to delete this product?')){
    //delete  from firebase db 
    await deleteProduct(id);
    //delete from redux store
     dispatch(deleteOne(id));
    //delete images from firebase storage
     images.forEach(async(url)=>{
      //delete images from firebase
      await deleteImage(url)
    })
     alert('Product deleted');
   }
}
  const handleShow = () => {
    //new item with changed display property
    const newItem:AllProducts = {...item, display:!item.display}
    //change display property in firebase
    changeVisibility(newItem)
    //change display property in redux store
    dispatch(updateOne(newItem))
  }

  return (
    <div  className={type==='hidden' ? 'bg-gray-300 mb-1 hr py-2' : 'bg-white mb-1 hr py-2'}>
      <div className='flex items-center gap-3'>
        <img src={item.images && item.images.length > 0 ? item.images[0]:'/placeholder.jpg'} alt={item.name + 'image'} 
        className='w-12 h-12 object-cover'/>
        <h2>{item.name}</h2>
      </div>
      <div className='flex justify-center gap-3 pb-2'>
        <button onClick={()=>handleDelete(item.id,item.images)}>
          <img src='/icons/delete.svg' alt='delete button' className='w-8 h-8 p-2 bg-red-500'/>
        </button>
        <Link to={'/admin/product/'+item.id}>
          <img src='/icons/edit.svg' alt='edit button' className='w-8 h-8 p-2 bg-cyan-500 '/>
          </Link>
        <button onClick={handleShow}>
          <img src={item.display ? '/icons/show.svg' : '/icons/hidden.svg'} alt='show button' className='w-8 h-8 p-2 bg-green-500'/>
          </button>
      </div>
      <hr />
    </div>
  );
};

export default AdminProduct;
