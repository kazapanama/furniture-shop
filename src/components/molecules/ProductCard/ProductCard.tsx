import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AllProducts } from '../../../types/Products';

interface ProductCardProps {
  item: AllProducts;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className=" mb-2 p-2 shadow-md w-full md:w-72 md:aspect-square flex flex-col items-center border  rounded-md">
      <Link to={'/products/' + item.id}>
        <ProductCartImage images={item.images} />
      </Link>
        <div className="flex flex-col justify-center items-start w-full mb-2">
        
        <Link to={'/products/' + item.id} className="font-bold text-xl mb-3 w-full">
          {item.name.length>48 ? item.name.slice(0,48)+'...':item.name}
        </Link>
          <div className="flex  w-full text-xl">
          <Link to={'/products/' + item.id}>
              <strong>{item.price}</strong> грн
          </Link>
          </div>
        </div>
      
    </div>
  );
};

export default ProductCard;

interface ProductCartImageProps {
  images: string[];
}

const ProductCartImage: FC<ProductCartImageProps> = ({ images }) => {
  if (images && images.length > 0) {
    return (
      <img
        src={images[0]}
        className="w-full aspect-square object-cover mb-2 rounded-md"
      />
    );
  } else {
    return (
      <img
        src="./placeholder.jpg"
        className="w-full aspect-square object-cover mb-2 rounded-md"
      />
    );
  }
};
