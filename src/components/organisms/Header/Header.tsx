import { Link } from 'react-router-dom';
import {FC, useState} from 'react';
import CartIcon from '../../atoms/CartIcon/CartIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-teal-400 sticky top-0 z-30 flex justify-between p-2">
      <Link to="/" className="flex items-center text-2xl font-bold text-white">
        <img src="/ico/192.png" alt="logo" className='w-10 h-10 mr-2'/>
        Ваші меблі
      </Link>
      
      <div className='flex justify-center gap-5'>
        <CartIcon />
        <button onClick={()=>setIsOpen(true)}>
          <img src="/icons/burger.svg" alt="burger" className='w-10 h-10'/>
        </button>

      </div>
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
    className={`h-screen w-screen bg-teal-400 fixed top-0 left-0 z-50 flex flex-col justify-between items-center transition-all ease-in-out duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
  >
      <button onClick={()=>setIsOpen(false)}
      className='text-white font-extrabold text-4xl mt-5 '>X</button>

    <div className='flex flex-col items-end w-full mr-8 md:items-center md:mr-0'>
        <Link to='/products' className='text-white font-bold text-4xl mb-5 hover:underline transition-all duration-300 '
        onClick={()=>setIsOpen(false)}>Всі товари</Link>
        <Link to='/delivery' className='text-white font-bold text-4xl mb-5 hover:underline transition-all duration-300'
        onClick={()=>setIsOpen(false)}>Умови доставки</Link>
        <Link to='/checkout' className='text-white font-bold text-4xl mb-5 hover:underline transition-all duration-300'
        onClick={()=>setIsOpen(false)}>Кошик</Link>
        <Link to='/about' className='text-white font-bold text-4xl mb-5 hover:underline transition-all duration-300'
        onClick={()=>setIsOpen(false)}>Про нас</Link>
        
    </div>


    <div className='w-full flex flex-col items-end mr-8'>
      <span className='text-white text-2xl font-thin'>Контактний телефон</span>
      <a href='tel:+380-99-360-6003' className='text-white text-3xl font-bold'>067 929 60 03</a>
    </div>

    <div className='opacity-0'>
      <Link to='/admin/dashboard' className='text-white font-bold text-2xl mb-5'
          onClick={()=>setIsOpen(false)}>Адмінка</Link>
    </div>


    </div>
    
  )
}