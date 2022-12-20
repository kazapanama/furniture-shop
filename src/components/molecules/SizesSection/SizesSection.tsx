import { FC } from "react";
import SizeDisplay from "../../atoms/SizeDisplay/SizeDisplay";

interface SizesSectionProps {
    width?: number;
    length?: number;
    height?: number;
}




const SizesSection:FC<SizesSectionProps> = ({width,height,length}) => {
    return ( 
        <div className=" flex justify-around py-2">
            {width ? <SizeDisplay parameter='Довжина' value={width} /> : null}
            {length ? <SizeDisplay parameter='Довжина' value={length}/> :null}
            {height ? <SizeDisplay parameter='Довжина' value={height}/> : null}

        </div>
     );
}
 
export default SizesSection;