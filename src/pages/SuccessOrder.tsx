import { Link } from "react-router-dom";

const SuccessOrder = () => {
    return ( 
        <section className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-2xl text-center">Замовлення успішно оформлено</h1>
            <span className="text-center">Наш менеджер вийде з вами на зв'язок найближчим часом</span>
            <Link to='/' className="font-bold text-green-500" >Повернутися на головну</Link>

        </section> 
    );
}
 
export default SuccessOrder;