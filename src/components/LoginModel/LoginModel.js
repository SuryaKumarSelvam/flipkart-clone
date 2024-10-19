import React, { useState } from 'react';
import './LoginModel.css';
import { RxCross2 } from "react-icons/rx";
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';

const LoginModel = ({isOpen,setIsOpen}) => {
    const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
    const [loginType,setLoginType] = useState(true);

    const dispatch = useDispatch();
   
    const signUp = async ()=>{
    
        const {data,error} = await supabase.auth.signUp({
            email,
            password
        })
        if(data.user){
            alert('Account Created. Please Check your email.')
        }
    }

    const login = async ()=>{
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error){
            alert(error?.message);
            return
        }

        dispatch(setUser(data.user));
    }
      

  return isOpen ?  (
    <div className='overlay'>
        <div className='loginModel'>
        <div className='left'>
            <div className='left-container'>
                <p className='login-title'>Login</p>
                <p className='login-des'>
                    Get access to Your Orders, Wishlist and Recommendations
                </p>
            </div>
        </div>
        <div className='right'>
            <input 
            type='email'
            className='login-input'
            placeholder='Email'
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <input 
            type='password'
            className='login-input'
            placeholder='Password'
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <p className='tremsandcon'>
                By Continuing, you Agree to Flipkart
                <span style={{ color:"blue" }}>Terms of Use.</span>
                <span style={{ color:"blue" }}>Privacy Policy.</span>
            </p>
            {
                loginType ? (
                    <button className='login-btn' onClick={login}>Login</button>
                ) : (
                    <button className='sign-up' onClick={signUp}>Sign Up</button>
                )
            }
            {
                loginType ? (
                    <p className='login-signup' onClick={()=>setLoginType(false)}> 
                        New to Flipkart Create an Account
                    </p>
                ) : (
                    <p className='login-signup' onClick={()=>setLoginType(true)}>
                        Already an User? Login to an Account
                    </p>
                )
            }
        </div>
        <div  className='close' onClick={()=>setIsOpen(false)}>
            <RxCross2/>
        </div>
        </div>
    </div>
  ) : (
    <></>
  )
}

export default LoginModel