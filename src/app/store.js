import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import cartData from '../slices/cartSlice';

export const store = configureStore({
    reducer:{
        userData:userReducer,
        cartData:cartData
    },
})