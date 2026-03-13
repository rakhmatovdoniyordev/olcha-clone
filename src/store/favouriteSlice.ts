import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        items: JSON.parse(localStorage.getItem("favouriteItems") || "[]")
    },
    reducers: {
        toggleFavourite: (state, action) => {
            const exists = state.items.find((item: any) => item.id === action.payload.id);
            if (exists) {
                state.items = state.items.filter((item: any) => item.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem("favouriteItems", JSON.stringify(state.items));
        }
    }
})


export const { toggleFavourite } = favouriteSlice.actions;
export default favouriteSlice;