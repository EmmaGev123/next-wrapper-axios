import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { wrapper } from "@/app/store";
import {
  createProductThunk,
  getCategoriesThunk,
} from "@/feauters/product/productAPI";
import {
  getCategories,
  Product,
  selectProduct,
} from "@/feauters/product/productSlice";
import { useForm } from "react-hook-form";

export default function addProduct() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Product>();
  const { catArr } = useAppSelector(selectProduct);
  console.log(catArr);
  const save = (obj: Product) => {
    dispatch(createProductThunk(obj)).unwrap().then(console.log);
  };

  return (
    <div>
      <h1>AddProduct</h1>
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
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async () => {
      const data = await store.dispatch(getCategoriesThunk()).unwrap();
      store.dispatch(getCategories(data));
    }
);
