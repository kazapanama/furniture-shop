import { FC } from "react";
import { Link } from "react-router-dom";



interface DashboardItemProps {
    title: string;
    to: string;
    icon: string;
}


const DashboardItem:FC<DashboardItemProps> = ({title,to,icon}) => {
    return ( 
    <div className="border p-4 flex justify-center items-center gap-2 rounded-full cursor-pointer hover:bg-teal-400">
        <img src={`/icons/${icon}.svg`} className="invert w-8 aspect-square"></img>
        <Link to={to} className='font-bold text-xl'>
            {title}
        </Link>
    </div> 
    );
}
 
export default DashboardItem;