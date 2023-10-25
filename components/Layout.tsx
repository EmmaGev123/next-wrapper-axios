import Link from "next/link";

export default function Layout({children}: any) {
    return(
        <div>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/category"}>Category</Link></li>
                <li><Link href={"/addProduct"}>AddProduct</Link></li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}