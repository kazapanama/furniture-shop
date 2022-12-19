import{ useParams } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useAppSelector } from '../../hooks/useStore';



const Edit = () => {

const {id} = useParams();
const item = useAppSelector(state => state.products.products).find(item => item.id === id);


    return ( <ProductForm toEdit={item}/> );
}
 
export default Edit;