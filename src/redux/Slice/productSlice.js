import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Adding middleware Thunk
export const fetchAsyncProducts = createAsyncThunk("products/fetchAsyncProducts", async ()=>{  
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log("Error : ", err)
    }) 
   return response.data;
})
export const fetchAsyncProductDetails = createAsyncThunk("products/fetchAsyncProductDetails",async (id)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
        console.log("Error : ", err)
    })
    return response.data;
})
export const fetchAsyncSearchedProducts = createAsyncThunk("products/fetchAsyncSearchedProducts",async(category)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch((err)=>{
        console.log("Error : ", err)
    })
    return response.data;
})


const initialState = {
    products:[],
    productDetail:{},
    searchedProducts:[]
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        removeSelectedProduct:(state)=>{      //removeSelectedProduct is the synchronous action
            state.productDetail={}            //here state refers to initial state
        }
    },
    extraReducers:{
        [fetchAsyncProducts.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncProducts.fulfilled]:(state, {payload})=>{
            console.log("Fetched Products")
            return { ...state, products:payload}
        },
        [fetchAsyncProducts.rejected]:()=>{
            console.log("Rejected")
        },
        [fetchAsyncProductDetails.fulfilled]:(state, {payload})=>{
            console.log("Product detail fetched successfully...")
            return { ...state, productDetail:payload}
        },
        [fetchAsyncSearchedProducts.fulfilled]:(state, {payload})=>{
            console.log("Searched Prdoucts fetched successfully...")
            return {...state, searchedProducts:payload}
        }
    }
})

// export const { addProduct } = productSlice.actions;    //exporting action so that we can use in component
export const getAllProducts = (state)=>state.products.products;//state.slicename.products
export const getSelectedProduct = (state)=>state.products.productDetail;
export const getSearchedProducts = (state)=>state.products.searchedProducts;
export const { removeSelectedProduct} = productSlice.actions;
export default productSlice.reducer;