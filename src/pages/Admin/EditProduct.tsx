import{ useParams } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useAppSelector } from '../../hooks/useStore';



const Edit = () => {

const {id} = useParams();
const products = useAppSelector(state => state.products);
const item = products.find(item => item.id === id);

    return ( <ProductForm toEdit={item}/> );
}
 
export default Edit;