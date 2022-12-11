import { products, addNewFlat } from './firebaseConfig/firebase';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/Products/AllProducts';
import Details from './pages/Products/Details';
import Login from './pages/Admin/Login';
import Pannel from './pages/Admin/Pannel';
import Edit from './pages/Admin/Edit';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useAppDispatch } from './hooks/useStore';
import { addAll } from './store/ProducsReducer';

function App() {
 
 const dispatch = useAppDispatch();
 dispatch(addAll(products));
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/panel" element={<Pannel />} />
        <Route path="/admin/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
