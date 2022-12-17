import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AllProducts } from '../../Products';

interface ProductCardProps {
  item: AllProducts;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className=" mb-2 p-2 shadow-md w-full md:w-72 md:aspect-square flex flex-col items-center border  rounded-md">
      <Link to={'/products/' + item.id}>
        <ProductCartImage images={item.images} />
        <div className="flex flex-col justify-center items-start w-full mb-2">
          <span className="font-bold text-xl mb-3 text-center w-full">{item.name.length>40 ? item.name.slice(0,40)+'...':item.name}</span>

          <div className="flex  w-full text-xl">
            <span>
              <strong>{item.price}</strong> грн
            </span>
          </div>
        </div>
      </Link>
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
