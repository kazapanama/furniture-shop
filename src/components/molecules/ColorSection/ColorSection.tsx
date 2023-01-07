import {FC} from 'react'
import { ColorVariant } from '../../../types/Products';
import { ColorsDictionary } from '../../../dictionaries/Colors';
import ColorPreview from '../../atoms/ColorPreview/ColorPreview';
import ButtonRounded from '../../atoms/ButtonRounded/ButtonRounded';

interface ColorSectionProps {
    setColorOptions: (obj: ColorVariant[]) => void;
    colorOptions: ColorVariant[];
}


const ColorSection:FC<ColorSectionProps> = ({colorOptions,setColorOptions}) => {



    const addNewColor = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()
        setColorOptions([...colorOptions, {color: 'white', price: 0,}])
    }


    const handleColorChange = (e:React.ChangeEvent<HTMLSelectElement>,index:number) => {
        const newColorOptions = [...colorOptions]
        newColorOptions.find((_,idx)=>index===idx)!.color = e.target.value
        setColorOptions(newColorOptions)
    }

    const handleNumberChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        const newColorOptions = [...colorOptions]
        newColorOptions.find((_,idx)=>index===idx)!.price = e.target.valueAsNumber
        setColorOptions(newColorOptions)
    }




    const deleteColor = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number) => {
        e.preventDefault()
        const newColorOptions = [...colorOptions];
        newColorOptions.splice(index, 1);
        setColorOptions(newColorOptions)
    }

    return ( 
      <>
        <div className='flex flex-wrap gap-3 '>
            {colorOptions.map((option, index) => (
                <div className='bg-yellow-100 flex gap-3 items-center border p-2' key={index}>
                    <div className='flex flex-col'>
                        <label>Назва кольору:</label>
                        <select onChange={(e)=>handleColorChange(e,index)}>

                            {Object.keys(ColorsDictionary).map((color) => (
                                <option value={color} key={color}
                                >
                                {ColorsDictionary[color][0]}
                                </option>
                            ))}

                        </select>

                    </div>
                    <div className='flex flex-col'>
                        <label>Ціна:</label>
                        <input type="number" className='w-16'
                        value={option.price||''} onChange={(e)=>handleNumberChange(e,index)}/>
                    </div>
                    <button onClick={(e)=>deleteColor(e,index)} className='font-bold text-3xl  '>X</button> 
                </div>
                
            ))}
        </div>

       <ColorPreview colorOptions={colorOptions} />

        <ButtonRounded text='Додати новий колір' onClick={(e)=>addNewColor(e)} color='bg-yellow-400'/>
        
      
      </>

     );
}
 
export default ColorSection;