import CategorySection from "../components/organisms/CategorySection/CategorySection";
import { useAppSelector } from "../hooks/useStore";
import { CategoriesDictionary } from "../dictionaries/Categories";
import Loader from "../components/atoms/Loader/Loader";
import { setTitle } from '../helpers/GeneralFunctions';

const Home = () => {
    setTitle('Головна')

    const categories = Object.keys(CategoriesDictionary)
    const productsData = useAppSelector(state => state.products)


    const products = productsData.products.filter(item => item.display)


    

    if (productsData.error) {
        return <p>Не вдалося завантажити дані</p>
    }



    return ( 
    <main className="">
        {productsData.loading && <Loader />}
        {categories.map(category => {
            //get last 7 items from each category
           const items =  products.filter(item => item.category === category).slice(0,7)
              return items.length>0 && <CategorySection title={CategoriesDictionary[category]} items={items} key={category}/>
        })}


    </main>
    
    );
}
 
export default Home;