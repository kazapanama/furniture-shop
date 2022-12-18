import { getProducts } from './firebaseConfig/firebase';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/Products/AllProducts';
import Details from './pages/Products/Details';
import Login from './pages/Admin/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useAppDispatch } from './hooks/useStore';
import { addAll } from './store/ProducsReducer';
import EditProduct from './pages/Admin/EditProduct';
import AddProduct from './pages/Admin/AddProduct';
import ProtectedRoutes from './helpers/ProtectedRoutes';
import { useEffect } from 'react';
import Dashboard from './pages/Admin/Dashboard';
import Orders from './pages/Admin/Orders';
import AdminAllProducts from './pages/Admin/AllProducts';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Delivery from './pages/Delivery';

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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />

        <Route path="/admin" element={<Login />} />
        {/* <Route element={<ProtectedRoutes />}> //private routes enabler */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminAllProducts />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/product/:id" element={<EditProduct />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
