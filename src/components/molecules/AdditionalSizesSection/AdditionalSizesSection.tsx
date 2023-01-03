import { FC } from "react";
import { AdditionalSize } from "../../../types/Products";
import ButtonRounded from "../../atoms/ButtonRounded/ButtonRounded";

interface AdditionalSizesSectionProps {
    additionalSizes: AdditionalSize[];
    setAdditionalSizes: (additionalSizes: AdditionalSize[]) => void;
}


const AdditionalSizesSection:FC<AdditionalSizesSectionProps> = ({additionalSizes,setAdditionalSizes}) => {
    
    
    const handleAddAdditionalSize = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const additionalSize: AdditionalSize = {
            width: 0,
            length: 0,
            price: 0,
        }
        setAdditionalSizes([...additionalSizes, additionalSize])
    }

    const deleteAdditionalSize = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ,index: number) => {
        e.preventDefault()
        const newAdditionalSizes = [...additionalSizes];
        newAdditionalSizes.splice(index, 1);
        setAdditionalSizes(newAdditionalSizes);
    }
    
    
    
    return ( 
        <section>
            <div className="flex flex-wrap">
            {additionalSizes.map((additionalSize, index) => (
                <div key={index} className='flex flex-col w-3/6 border'>
                    <label>Ширина</label>
                    <input type="number" value={additionalSize.width || ''} onChange={(e) => {
                        const newAdditionalSizes = [...additionalSizes];
                        newAdditionalSizes[index].width = +e.target.value;
                        setAdditionalSizes(newAdditionalSizes);
                    }}/>
                    {/* на матрацах не потрібно вводити висоту */}
                    {/* <label>Висота</label>
                    <input type="number" value={additionalSize.height || ''} onChange={(e) => {
                        const newAdditionalSizes = [...additionalSizes];
                        newAdditionalSizes[index].height = +e.target.value;
                        setAdditionalSizes(newAdditionalSizes);
                    }}/> */}
                    <label>Довжина</label>
                    <input type="number" value={additionalSize.length || ''} onChange={(e) => {
                        const newAdditionalSizes = [...additionalSizes];
                        newAdditionalSizes[index].length = +e.target.value;
                        setAdditionalSizes(newAdditionalSizes);
                    }}/>
                    <label htmlFor="price">Ціна</label>
                    <input type="number" value={additionalSize.price || ''} onChange={(e) => {
                        const newAdditionalSizes = [...additionalSizes];
                        newAdditionalSizes[index].price = +e.target.value;
                        setAdditionalSizes(newAdditionalSizes);
                    }}/>
                    <button onClick={(e)=>deleteAdditionalSize(e,index)}>X</button>
                </div>
            ))}
            </div>
            
            <ButtonRounded text="Додати новий розмір" color='bg-blue-400' onClick={(e)=>handleAddAdditionalSize(e)}/>
        </section> 
    
     );
}
 
export default AdditionalSizesSection;