import { FC } from "react";

interface ButtonRoundedProps {
    text: string;
    onClick?: () => void;
}

const ButtonRounded:FC<ButtonRoundedProps> = ({text,onClick}) => {
    return ( 
        <button className="rounded-full bg-teal-400 text-white px-5 py-2 font-semibold shadow-md hover:-translate-y-1 transition-all duration-300"
        
        onClick={onClick}>
            {text}
        </button>
     );
}
 
export default ButtonRounded;