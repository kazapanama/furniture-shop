import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AllProducts } from '../../Products';

interface ProductCardProps {
  item: AllProducts;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    
      <div className=" mb-2 p-2 shadow-sm w-full md:w-72 md:aspect-square flex flex-col items-center border">
        <Link to={'/products/'+item.id}>  <ProductCartImage images={item.images} /></Link>

        <div className='flex flex-col justify-center items-start w-full mb-2'>
          
          <span className="font-bold text-xl mb-3">{item.name}</span>
          
          <div className='flex justify-between w-full'>
            <span>{item.price} грн</span>
          <Link to={'/products/' + item.id}>Детальніше</Link>

          </div>
        </div>
      </div>
    
  );
};

export default ProductCard;

interface ProductCartImageProps {
  images: string[];
}


const ProductCartImage:FC<ProductCartImageProps> = ({images}) => {
  if (images && images.length > 0) {
    return <img src={images[0]} className="w-full aspect-square object-cover" /> 
  } else{
    return <img src="./placeholder.png" className="w-full aspect-square object-cover" /> 
  }
}