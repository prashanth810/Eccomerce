import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Slices/AuthSlice.js';
import ProductSlice from './Slices/ProductSlice.js';


const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        products: ProductSlice,
    },
});

export default Store;