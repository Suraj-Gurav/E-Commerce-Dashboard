import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Product from './Components/Product';
import ProductList from './Components/ProductList';
import Update from './Components/Update';


const App = ()=> {
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/add' element={<Product/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/logout' element={<h1>Login User </h1>}></Route>
          <Route path='/profile' element={<h1>User profile</h1>}></Route>
          </Route>
          <Route path='/signIn' element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
