import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { ICartItem } from '../../../types/Cart';
import { decreaseByOne, increaseByOne } from '../../../store/CartReducer';
import { ColorsDictionary } from '../../../dictionaries/Colors';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const product = useAppSelector((state) => state.products).products.find(
    (product) => product.id === item.id
  )!;

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const { color } = item;
    const newItem = { id: product.id, price: product.price, color };
    dispatch(increaseByOne(newItem));
  };

  const handleRemove = () => {
    const { color } = item;
    const newItem = { id: product.id, price: product.price, color };
    dispatch(decreaseByOne(newItem));
  };

  return (
    <div className="flex w-full border p-2">
      <img
        src={product.images[0] || '/placeholder.jpg'}
        alt={product.name}
        className="w-8 h-8 mr-2"
      />
      <div className="flex flex-col gap-3 w-full">
        <span className="text-sm w-full">{product.name}</span>

        <div className="flex justify-between">
          <div>
            <div className="w-full flex gap-2 items-center">
              <button
                className="text-xl font-thin border w-5 h-5 flex justify-center items-center"
                onClick={handleRemove}
              >
                -
              </button>
              <span className="text-lg">{item.quantity}шт.</span>
              <button
                className="text-xl font-thin border w-5 h-5 flex justify-center items-center"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
            <div>
              {item.color && (
                <span className="text-sm ml-2">
                  Колір: {ColorsDictionary[item.color][0]}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-5">
            <span>
              <strong>{product.price * item.quantity}</strong>грн
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
