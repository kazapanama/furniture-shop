import { FC } from "react";

interface ButtonRoundedProps {
    text: string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    color?: 'bg-teal-400' | 'bg-red-400' | 'bg-green-400' | 'bg-yellow-400' | 'bg-blue-400' | 'bg-gray-400'
}

const ButtonRounded:FC<ButtonRoundedProps> = ({text,onClick,color='bg-teal-400'}) => {
   
   
    return ( 
        <button className={'rounded-full text-white px-5 py-2 mb-2 font-semibold shadow-md hover:-translate-y-1 transition-all duration-300 ' + color}
        
        onClick={onClick}>
            {text}
        </button>
     );
}
 
export default ButtonRounded;