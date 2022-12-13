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

        <div className='flex justify-between items-end w-full mb-2'>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{item.name}</span>
            <span>{item.price} грн</span>
          </div>

          <Link to={'/products/' + item.id}>Детальніше</Link>
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