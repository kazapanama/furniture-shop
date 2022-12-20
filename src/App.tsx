
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Products/Details';
import Login from './pages/Admin/Login';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';

import EditProduct from './pages/Admin/EditProduct';
import AddProduct from './pages/Admin/AddProduct';
import ProtectedRoutes from './helpers/ProtectedRoutes';

import Dashboard from './pages/Admin/Dashboard';
import Orders from './pages/Admin/Orders';
import AdminAllProducts from './pages/Admin/AllAdminProducts';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Delivery from './pages/Delivery';
import AllProductsCustomer from './pages/Products/AllProductsCustomer';
import { useEffect } from 'react';
import { fetchProducts } from './store/ProducsReducer';
import { useAppDispatch } from './hooks/useStore';
import NotFound from './pages/404';


function App() {


  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<AllProductsCustomer />} />
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
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
