import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
    lang: "uz" | "ru" | "en";
}

const initialState: LanguageState = {
    lang: (localStorage.getItem("lang") as "uz" | "ru" | "en") || "uz"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<"uz" | "ru" | "en">) => {
            state.lang = action.payload;
            localStorage.setItem("lang", action.payload);
        }
    }
})

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;