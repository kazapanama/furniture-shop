import{ useParams } from 'react-router-dom';
import ProductForm from '../../components/organisms/ProductForm/ProductForm';
import { useAppSelector } from '../../hooks/useStore';
import { setTitle } from '../../helpers/GeneralFunctions';


const Edit = () => {



const {id} = useParams();
const item = useAppSelector(state => state.products.products).find(item => item.id === id);

item ? setTitle(`Редагувати товар ${item.name}`) : setTitle('Додати товар')

    return ( <ProductForm toEdit={item}/> );
}
 
export default Edit;