import { useAppSelector } from "@/app/hooks"
import { wrapper } from "@/app/store"
import { getCategoriesThunk } from "@/feauters/product/productAPI"
import { getCategories, selectProduct } from "@/feauters/product/productSlice"

export default function Category() {
    const {catArr}=useAppSelector(selectProduct)
    console.log(catArr);
    return(
        <div>
            <select >
          {catArr.map((elm) => {
            return <option value={elm}>{elm}</option>;
          })}
        </select>
        </div>
    )
}
export const getStaticProps=wrapper.getStaticProps(
    (store):any=>async ()=>{
        const data = await store.dispatch(getCategoriesThunk()).unwrap()
        store.dispatch(getCategories(data))
    }
)