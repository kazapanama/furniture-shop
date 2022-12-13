import { getProducts } from './firebaseConfig/firebase';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/Products/AllProducts';
import Details from './pages/Products/Details';
import Login from './pages/Admin/Login';
import Pannel from './pages/Admin/Pannel';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useAppDispatch } from './hooks/useStore';
import { addAll } from './store/ProducsReducer';
import EditProduct from './pages/Admin/EditProduct';
import AddProduct from './pages/Admin/AddProduct';
import ProtectedRoutes from './helpers/ProtectedRoutes';
import { useEffect } from 'react';

function App() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    const setupData = async () => {
      const products = await getProducts();
   
      dispatch(addAll(products));
    }
    setupData();

  },[])




  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/admin" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/panel" element={<Pannel />} />
          <Route path="/admin/edit" element={<EditProduct />} />
          <Route path="/admin/add" element={<AddProduct />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
