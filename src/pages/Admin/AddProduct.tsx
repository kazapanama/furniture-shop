
import ProductForm from "../../components/organisms/ProductForm/ProductForm";
import { setTitle } from "../../helpers/GeneralFunctions";

const AddProduct = () => {

  setTitle('Додати товар');


  return(
  
    <ProductForm />

    )
 
}
 
export default AddProduct