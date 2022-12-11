import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AllProducts } from '../../Products';

interface ProductCardProps {
  item: AllProducts;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    
      <div className=" mb-2 p-2 shadow-xl">
        {item.images ? 'kek' : <Link to={'/products/' + item.id}><img src="./placeholder.png" className="" /></Link>}

        <div className='flex justify-between items-end'>
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
