import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import {IoSearch } from 'react-icons/io5';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import LoginModel from '../LoginModel/LoginModel';
import { useDispatch, useSelector } from 'react-redux';
import supabase from '../../supabase';
import { removeUser } from '../../slices/userSlice';

const Nav = () => {
    const [isOpen,setIsOpen] = useState(false);
    const user = useSelector((state)=>state.userData.user);
    const cartCount = useSelector((state)=>state.cartData.cart).length
    const dispatch = useDispatch();
  
    useEffect(()=>{
        setIsOpen(false)
    },[user]);

    const signOut = async ()=>{
        const {error} = await supabase.auth.signOut();
        if(!error){
            dispatch(removeUser());
        }
    }

    console.log(cartCount)
  return (
    <>
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={"/"}>
            <img 
            src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' 
            alt='Flipkart Logo'
            className='nav-logo'/>
            </Link>
            <div className='nav-search'>
                <input 
                type='text'
                placeholder='Search for Products, Brands and More'
                className='nav-search-box'
                />
                <button className='searchbtn'>
                    <IoSearch/>
                </button>
                </div>
                {
                    user ? (
                        <h3 style={{ textTransform:'uppercase',cursor:'pointer' }} onClick={signOut}>{user?.email.slice(0,2)}</h3>
                    ) : (
                <button className='navbar-btn' onClick={()=>setIsOpen(true)}>
                    Login
                </button>

                    )}
                <div className='navbar-bcs'>
                    <h3>Become a Seller</h3>
                </div>
                <div className='navbar-more'>
                    <h3>
                        More
                        <i className='moredown'>
                        <MdKeyboardArrowDown/>
                        </i>
                    </h3>
                </div>
                <div className='nav-cart'>
                    <div className='cart-icon'>
                        <FaShoppingCart/>
                    </div>
                    <Link to={"/cart"} className='cart'>Cart<span className='cart-count'>{cartCount}</span></Link>
                </div>
            </div>
            <LoginModel isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    </>
  )
}

export default Nav;