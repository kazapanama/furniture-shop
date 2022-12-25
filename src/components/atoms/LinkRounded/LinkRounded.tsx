import { FC } from "react";
import { Link } from "react-router-dom";
import ButtonRounded from "../ButtonRounded/ButtonRounded";

interface LinkRoundedProps {
    text: string;
    to: string;
    color?: 'bg-teal-400' | 'bg-red-400' | 'bg-green-400' | 'bg-yellow-400' | 'bg-blue-400' | 'bg-gray-400'
}


const LinkRounded:FC<LinkRoundedProps> = ({text,color = 'bg-teal-400' ,to}) => {
    return ( 
        <Link to={to}>
            <ButtonRounded text={text} color={color}/>
        </Link>
     );
}
 
export default LinkRounded;