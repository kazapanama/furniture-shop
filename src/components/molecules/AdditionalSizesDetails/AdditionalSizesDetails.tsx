import { FC } from "react";
import { AdditionalSize } from "../../../types/Products";

interface AdditionalSizesDetailsProps {
  additionalSizes: AdditionalSize[]
  resetPriceAndDimensions: () => void
  setBasePrice:(price:number)=>void
  activeDimesions: {width:number,length:number}
  setActiveDimensions: (dimensions:{width:number,length:number}) => void
}


const AdditionalSizesDetails:FC<AdditionalSizesDetailsProps> = ({additionalSizes,resetPriceAndDimensions,setBasePrice,activeDimesions,setActiveDimensions}) => {

  const formatOptionText = (option:AdditionalSize) => {
    return `${option.width}x${option.length} - ${option.price}грн`
  }
  

const setVariant = (e:React.ChangeEvent<HTMLSelectElement>) => {
    
    if (e.target.value === 'base'){
      resetPriceAndDimensions()
      return
    }
  
    setBasePrice(Number(e.target.value))

    const newDimensions = additionalSizes.find(size=>size.price === Number(e.target.value))
    if (!newDimensions) return
    setActiveDimensions({width:newDimensions.width||0,length:newDimensions.length||0})

}

  
  
  
  if (additionalSizes.length === 0) return null

  


  return (
    <section>
      <h2>Додаткові розміри</h2>


      <select onChange={setVariant}>
        <option value='base'>Базовий варіант</option>
        {additionalSizes.map((size,i)=>(
          <option key={i} value={size.price}>{formatOptionText(size)}</option>
  
        ))}
      </select>


    </section>
  )
};

export default AdditionalSizesDetails;
