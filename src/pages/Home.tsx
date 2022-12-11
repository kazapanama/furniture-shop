import CategorySection from "../components/CategorySection/CategorySection";
import { useAppSelector } from "../hooks/useStore";
// import { products, } from '../firebaseConfig/firebase';

const Home = () => {
    
    const products = useAppSelector(state => state.products)
    const sofas = products.filter(item => item.category === 'sofa');
    const chairs = products.filter(item => item.category === 'chair');
    const closets = products.filter(item => item.category === 'closet');
    const beds = products.filter(item => item.category === 'bed');

    return ( 
    <div className="">

        <h1>Home</h1> 
        <CategorySection title="Дивани" items={sofas}/>
        <CategorySection title="Крісла" items={chairs}/>
        <CategorySection title="Шафи" items={closets}/>
        <CategorySection title="Ліжка" items={beds}/>
    </div>
    
    );
}
 
export default Home;