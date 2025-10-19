import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchallproducts } from "../../service/apis";


// get all products 
export const getallproducts = createAsyncThunk("product/getallproducts", async (_, thunkAPI) => {
    try {
        const response = await fetchallproducts();
        return response.data.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Failed to fetch products !");
    }
})


const initialState = {
    product: {
        productloading: false,
        productdata: [],
        producterror: null,
    }
}
const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getallproducts.pending, (state) => {
                state.product.productloading = true;
                state.product.producterror = null;
            })
            .addCase(getallproducts.fulfilled, (state, action) => {
                state.product.productloading = false;
                state.product.productdata = action.payload;
                state.product.producterror = null;
            })
            .addCase(getallproducts.rejected, (state, action) => {
                state.product.productloading = false;
                state.product.producterror = action.payload;
            })
    }
})

export default ProductSlice.reducer;