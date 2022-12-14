import { AllProducts } from '../../Products';
import { FC } from 'react';

interface AdminProductProps {
  item: AllProducts;
}

const AdminProduct: FC<AdminProductProps> = ({ item }) => {
  return (
    <div key={item.id} className="mb-2">
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default AdminProduct;
