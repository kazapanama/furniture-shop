import { Link } from 'react-router-dom';
import {FC, useState} from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-green-500 sticky top-0 z-30 flex justify-between p-2">
      <Link to="/" className="flex items-center text-2xl font-bold text-white">
        Furniture Store
      </Link>
      <button onClick={()=>setIsOpen(true)}>
        <img src="/icons/burger.png" alt="burger" />
      </button>
      <OpenedMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
  );
};

export default Header;




interface OpenedMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const OpenedMenu:FC<OpenedMenuProps> = ({isOpen,setIsOpen}) => {
  
  return(
    <div
    className={`h-screen w-screen bg-green-500 fixed top-0 left-0 z-50 flex flex-col justify-start items-center transition-all ease-in-out duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
  >
      <button onClick={()=>setIsOpen(false)}
      className='text-white font-extrabold text-4xl mt-5 mb-28'>X</button>


      <Link to='/admin/dashboard' className='text-white font-bold text-2xl mb-5'
      onClick={()=>setIsOpen(false)}>Адмінка</Link>


    </div>
    
  )
}