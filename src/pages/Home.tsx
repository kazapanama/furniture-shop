import CategorySection from "../components/CategorySection/CategorySection";
import { useAppSelector } from "../hooks/useStore";

const Home = () => {
    
    const products = useAppSelector(state => state.products).filter(item => item.display)
    const sofas = products.filter(item => item.category === 'sofa');
    const chairs = products.filter(item => item.category === 'chair');
    const closets = products.filter(item => item.category === 'closet');
    const beds = products.filter(item => item.category === 'bed');
    const beddings = products.filter(item => item.category === 'bedding');

    return ( 
    <main className="">

       {sofas.length>0 && <CategorySection title="Дивани" items={sofas}/> }
       {chairs.length>0 && <CategorySection title="Крісла" items={chairs}/>} 
       {closets.length>0 && <CategorySection title="Шафи" items={closets}/>}
       {beds.length>0 && <CategorySection title="Ліжка" items={beds}/>}
       {beddings.length>0 && <CategorySection title="Матраци" items={beddings}/>}
    </main>
    
    );
}
 
export default Home;