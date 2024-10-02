// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Welcome from './component/Welcome';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Product from './component/Product';
import ViewProduct from './component/ViewProduct';
import AddSupplier from './component/AddSupplier';
import ViewSupplier from './component/ViewSupplier';
import Supplier from './component/Supplier';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Location from './component/Location';
import Login from './component/Login';
import Register from './component/Register';
import PaymentPage from './component/PaymentPage';
import OrderDetailsPage from './component/OrderDetailsPage';
import AddOrderPage from './component/AddOrderPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/viewProduct" element={<ViewProduct />} />
        <Route path="/addSupplier" element={<AddSupplier />} /> 
        <Route path="/ViewSupplier" element={<ViewSupplier />} />
        <Route path="/Supplier" element={<Supplier/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/PaymentPage" element={<PaymentPage/>}/>
        <Route path="/OrderDetailsPage" element={<OrderDetailsPage/>}/>
        <Route path="/AddOrderPage" element={<AddOrderPage/>}/>
      </Routes>
    </>
  );
}

export default App;
