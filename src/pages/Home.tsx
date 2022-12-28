import CategorySection from "../components/organisms/CategorySection/CategorySection";
import { useAppSelector } from "../hooks/useStore";
import { CategoriesDictionary } from "../dictionaries/Categories";
import Loader from "../components/atoms/Loader/Loader";

const Home = () => {
    
    const categories = Object.keys(CategoriesDictionary)
    const productsData = useAppSelector(state => state.products)


    const products = productsData.products.filter(item => item.display)


    

    if (productsData.error) {
        return <p>ШОСЬ НЕ ТАК</p>
    }



    return ( 
    <main className="">
        {productsData.loading && <Loader />}
        {categories.map(category => {
            //get last 7 items from each category
           const items =  products.filter(item => item.category === category).slice(-7)
              return items.length>0 && <CategorySection title={CategoriesDictionary[category]} items={items} key={category}/>
        })}


    </main>
    
    );
}
 
export default Home;