import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useStore";


const Details = () => {
    const {id} = useParams();

    const product = useAppSelector(state => state.products.find(item => item.id === id))


    return ( 
        <section>
            <div>
            <img src={product?.images[0]} alt="product image" />
            </div>

            <h1>{product?.name}</h1>


            <div>
                Ціна:
                <span>{product?.price}</span>
            </div>

            <div>
                Виробник:
                <span>{product?.manufacturer}</span>
            </div>

            <div className="flex flex-col">
                <span>Ширина <strong>{product?.width}</strong>см</span>
                <span>Висота <strong>{product?.height}</strong>см</span>
                <span>Довжина <strong>{product?.length}</strong>см</span>
            </div>


            <div>
                Опис:
                <span>{product?.description}</span>
            </div>
                

            


        </section>



     );
}
 
export default Details;