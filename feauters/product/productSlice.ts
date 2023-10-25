import { RootState } from "@/app/store"
import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export type  Product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image:  string
}

const initialState : {arr: Product[],product: Product,catArr: string[]}= {
    arr:[], product: {} as Product,catArr: []
}

const prodSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProduct: (state,action) => {
            state.arr = action.payload
        },
        getProductById: (state,action) => {
            state.product = action.payload
        },
        getCategories: (state,action) => {
            state.catArr = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
              ...state,
              ...action.payload.product,
            };
          },
    }
})

export const selectProduct = (st:RootState) => st.product
export const {getProduct,getProductById,getCategories} = prodSlice.actions
export default prodSlice.reducer