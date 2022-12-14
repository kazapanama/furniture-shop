import { Link } from 'react-router-dom';
import { setTitle } from '../helpers/GeneralFunctions';

const NotFound = () => {
  setTitle('404, не знайдено');

  return (
    <section className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl text-bold">404, не знайдено</h1>
      <Link to="/">
        Повернутися на <strong className="text-teal-400">Головну</strong>
      </Link>
    </section>
  );
};

export default NotFound;
