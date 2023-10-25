import { useAppSelector } from "@/app/hooks"
import { wrapper } from "@/app/store"
import { getProductByIdThunk } from "../feauters/product/productAPI"
import { getProductById, selectProduct } from "../feauters/product/productSlice"

export default function seeProduct() {
   const {product} =useAppSelector(selectProduct)
   console.log(product);
   
    return(
        <div>
            <h1>SeeProduct</h1>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store): any => async({params}: any) => {
        const data =await store.dispatch(getProductByIdThunk(params.id)).unwrap()
        store.dispatch(getProductById(data))
    }
)