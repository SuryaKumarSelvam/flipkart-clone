import React, { useEffect } from 'react';
import "./App.css";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetaiils/ProductDetails';
import Cart from './Pages/Cart/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import {useDispatch} from 'react-redux';
import supabase from './supabase';
import { setUser } from './slices/userSlice';

const App = () => {

  const dispatch = useDispatch();

  const getUser = async ()=>{
    const {data,error} = await supabase.auth.getSession();
    if(data){
      dispatch(setUser(data?.session?.user));
    }
  }

  useEffect(()=>{
    getUser()
  },[])
  return (
   
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/productdetails/:id'  element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App