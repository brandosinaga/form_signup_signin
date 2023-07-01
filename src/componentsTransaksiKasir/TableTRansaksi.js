import 'bootstrap/dist/css/bootstrap.min.css';
import RowCart from './RowCart';
import { useMemo, useState } from 'react';



export default function TableTRansaksi(props){

      const {carts} = props;


      const getRowCart = useMemo(() => carts.map((cart, index) => <RowCart key={cart.id} cart = {cart} number = {index + 1}>{cart.name}</RowCart>),[carts])
     



    return(
        <table className="table">
        <thead className='text-center rounded bg-warning'>
          <tr>
            <th scope="col" className='border'>No.</th>
            <th scope="col" className='border'>Nama Barang</th>
            <th scope="col" className='border'>Quantity</th>
            <th scope="col" className='border'>Price</th>
            <th scope="col" className='border'>Total</th>
          </tr>
        </thead>
        <tbody>
         {getRowCart}
        </tbody> 
      </table>
    )
}