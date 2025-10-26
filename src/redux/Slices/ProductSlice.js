import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchallproducts, handlegetsingleproduct } from "../../service/apis";


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


///  fetch single product
export const handlefetchsingleproduct = createAsyncThunk("product/singleprod", async (id, thunkAPI) => {
    try {
        const response = await handlegetsingleproduct(id);
        return response.data.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Failed to fetch product by Id !");
    }
})

const initialState = {
    product: {
        productloading: false,
        productdata: [],
        producterror: null,
    },
    singleprod: {
        singleproduct: {},
        singleproductloading: false,
        singleproducterror: null,
    },
}
const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get product list
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

            // get single product 
            .addCase(handlefetchsingleproduct.pending, (state) => {
                state.singleprod.singleproductloading = true;
                state.singleprod.singleproducterror = null;
            })
            .addCase(handlefetchsingleproduct.fulfilled, (state, action) => {
                state.singleprod.singleproductloading = false;
                state.singleprod.singleproduct = action.payload;
            })
            .addCase(handlefetchsingleproduct.rejected, (state, action) => {
                state.singleprod.singleproductloading = false;
                state.singleprod.singleproducterror = action.payload;
            })
    }
})

export default ProductSlice.reducer;