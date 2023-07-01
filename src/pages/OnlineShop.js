import {useMemo } from "react";
import ProductCard from "../component/ProductCard";

export default function OnlineShop({dataCust}){

       


        const allProducts = useMemo(() => dataCust.reduce((a,e,i) => {

            const {products, nama_user, id_user} = e

            products.forEach(item => a.push ({id_cart : a.length,nama_user,id_user,...item}))

            return a
        
         },[]) ,[dataCust])






    return(<div className="min-h-100 bg-primary d-flex flex-wrap justify-content-around align-items-center m-2 p-2">
                  {allProducts.map(item => <ProductCard key={item.id_cart} product={item} />)}
            </div>)
}





