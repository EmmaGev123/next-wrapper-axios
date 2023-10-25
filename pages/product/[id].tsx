import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { wrapper } from "@/app/store"
import { useForm } from "react-hook-form"
import { getCategoriesThunk, getProductByIdThunk, updateProductByIdThunk } from "../../feauters/product/productAPI"
import { getCategories, getProductById, Product, selectProduct } from "../../feauters/product/productSlice"

export default function seeProduct() {
    const dispatch=useAppDispatch()
   const {product,catArr} =useAppSelector(selectProduct)
   console.log(product);
   const { register, handleSubmit } = useForm<Product>();
   const save=(obj: Product)=>{
    dispatch(updateProductByIdThunk({obj, id:product.id})).unwrap().then(console.log);
   }
   
    return(
        <div>
            <h1>SeeProduct</h1>
            {product.title}
            <form onSubmit={handleSubmit(save)}>
        <input type="text" placeholder="Title" {...register("title")} />
        <input type="text" placeholder="Price" {...register("price")} />
        <select {...register("category")}>
          {catArr.map((elm) => {
            return <option value={elm}>{elm}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        <input type="text" placeholder="Image" {...register("image")} />
        <input type="text" placeholder="Title" {...register("title")} />
        <button>save</button>
      </form>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store): any => async({params}: any) => {
        const data =await store.dispatch(getProductByIdThunk(params.id)).unwrap()
        store.dispatch(getProductById(data))
        const data1=await store.dispatch(getCategoriesThunk()).unwrap()
        store.dispatch(getCategories(data1))
    }
)