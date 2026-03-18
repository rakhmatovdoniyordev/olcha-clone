import { configureStore } from '@reduxjs/toolkit';
import favouriteSlice from './favouriteSlice';
import cartSlice from "@/store/cartSlice"


export const store = configureStore({
    reducer: {
        favourite: favouriteSlice,
        cart: cartSlice
    }
})