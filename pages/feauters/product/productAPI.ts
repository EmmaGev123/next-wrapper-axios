import { myAxios } from "@/app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getProductsThunk = createAsyncThunk(
    "get products",
    async () => {
        const {data} = await myAxios.get("products")
      return data
    }
)

export const getProductByIdThunk = createAsyncThunk(
    "get product by id",
    async (id: number) => {
        const {data} = await myAxios.get("products/"+id)
        return data

    }
)

export const getCategoriesThunk = createAsyncThunk(
    "get category",
    async () => {
        const {data} = await myAxios.get("products/categories")
        return data
    }
)

export const getProductsByLimitThunk = createAsyncThunk(
    "get product by limit",
    async (limit: number) => {
        const {data} = await myAxios.get("products/?limit="+limit)
         return data
    }
)

export const getProductByCategoryThunk = createAsyncThunk (
     "get product by category",
     async (text: string) => {
        const {data} =await myAxios.get("products/category/"+text)
       return data 
    }
)