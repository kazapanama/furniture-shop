import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <nav className="w-full bg-green-500 sticky top-0 z-30 flex justify-between p-2">
      <Link to="/" className="flex items-center text-2xl font-bold text-white">
        Furniture Store
      </Link>
      <button>
        <img src="/icons/burger.png" alt="burger" />
      </button>
    </nav>
  );
};

export default Header;
