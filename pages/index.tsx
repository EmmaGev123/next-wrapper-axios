import Image from 'next/image'
import { Inter } from 'next/font/google'
import { wrapper } from '@/app/store'
import { getCategoriesThunk, getProductByCategoryThunk, getProductsThunk } from './feauters/product/productAPI'
import { getCategories, getProduct, selectProduct } from './feauters/product/productSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   const {arr,catArr} = useAppSelector(selectProduct)
   console.log(arr,catArr);
   const dispatch =useAppDispatch()



  return (
    <div>
      <select onChange={async (e) => {
        const data = await dispatch(getProductByCategoryThunk(e.target.value)).unwrap()
        console.log(data);
        dispatch(getProduct(data))
      }}>
          {
            catArr.map(e => {
              return(
                <option key={e} value={e}>{e}</option>
              )
            })
          }
      </select>
       <table>
          <thead>
             <tr>
                <th>Title</th>
                <th>image</th>
                <th>Category</th>
                <th>See</th>
                <th>delete</th>
             </tr>
          </thead>
          <tbody>
             {
                arr.map(elm => {
                  return(
                    <tr key={elm.id}>
                       <td>{elm.title}</td>
                       <td><img src={elm.image} width={150}/></td>
                       <td>{elm.category}</td>
                       <td><Link href={"products/"+elm.id}>See more</Link></td>
                       <td><button>x</button></td>
                    </tr>
                  )
                })
             }
          </tbody>
       </table>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(
  (store): any => async () => {
    const data = await store.dispatch(getProductsThunk()).unwrap()
    console.log(data);
     store.dispatch(getProduct(data))
     const data1 = await store.dispatch(getCategoriesThunk()).unwrap()
     store.dispatch(getCategories(data1))    
  }
)
