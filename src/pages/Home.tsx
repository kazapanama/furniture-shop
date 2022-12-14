import CategorySection from "../components/CategorySection/CategorySection";
import { useAppSelector } from "../hooks/useStore";

const Home = () => {
    
    const products = useAppSelector(state => state.products)
    const sofas = products.filter(item => item.category === 'sofa');
    const chairs = products.filter(item => item.category === 'chair');
    const closets = products.filter(item => item.category === 'closet');
    const beds = products.filter(item => item.category === 'bed');
    const beddings = products.filter(item => item.category === 'bedding');

    return ( 
    <div className="">

        <CategorySection title="Дивани" items={sofas}/>
        <CategorySection title="Крісла" items={chairs}/>
        <CategorySection title="Шафи" items={closets}/>
        <CategorySection title="Ліжка" items={beds}/>
        <CategorySection title="Матраци" items={beddings}/>
    </div>
    
    );
}
 
export default Home;