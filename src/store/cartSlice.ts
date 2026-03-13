import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price?: number;
    amount: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.cart.find(i => i.id === action.payload.id);

            if (item) {
                item.amount += 1;
            } else {
                state.cart.push(action.payload);
            }
        },

        decrementCart: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(p => p.id === action.payload);

            if(item && item.amount > 1) {
                item.amount -= 1;
            }
        },

        removeCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(p => p.id !== action.payload);
        },

        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addCart, decrementCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;