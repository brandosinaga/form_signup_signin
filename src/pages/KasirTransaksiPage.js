// import { Button, Form } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useEffect, useMemo, useRef, useState } from "react";
// import InvoicePrint from './KasirTransaksiPage';
// import TableTRansaksi from './KasirTransaksiPage';
// import InputProductsToCart from './KasirTransaksiPage'
// import CustomerSelection from './KasirTransaksiPage'

export default function KasirTransaksiPage(){


    // states
    
    // const[number, setNumber] = useState(1);

    // const [faktur, setFaktur] = useState('');

    // const [state, setState] = useState(false);
    
    // const [customer, setCustomer] = useState(null);

    // const [totalPayment, setTotalPayment] = useState(0);

    // const [carts, setCarts] = useState([]);



    // functions

  //   const handleState = () => setState(!state);

  //   const handleBayar = () =>  setNumber(number + 1);                

  //   const getInvoiceNumber = (serial) => setFaktur(serial);

  //   const getCustomer = (cust) => {

  //     const custName = customers.find(name => name.name === cust)

  //                if(custName){

  //                             setCustomer(custName.name)

  //                } else {

  //                             setCustomer(null)
  //                             setCarts([])
  //                             setTotalPayment(0)
  //                }    
  //   }

   
  
  //   const handleAddToCart = (product) => {


  //              const {quantity} = product
                

  //                 if(product.name !== null && customer !== null){

  //                       items.forEach(item => {

  //                          const selectedItem = items.find(item => item.name === product.name);

  //                          const {id, name, price} = selectedItem;

  //                          const obj = { id, name, price, ordered : quantity, total : (quantity * price)}

  //                          setCarts([...carts, obj])

  //                          setTotalPayment(totalPayment + obj.total)
                                            
  //                       })

  //                 } 

  //                 setState(!state)

  //   }






  //  const filteredProducts = useMemo(() => {

  //            return carts.reduce((a,e,i) => {

  //              if(i > 0){

  //                 return [...a.filter(item => item.name !== e.name)]
                  
  //               } else {
                  
  //                     return [...items.filter(item => item.name !== e.name)]
  //               }

  //           },[])

  //  },[carts])




  //   useEffect(() => {

        
  //                if(number === 10){

  //                              setNumber(0);
  //                   }


                 

  //   }, [number])










    // return(<div className="p-2">

    //        <section className="border rounded p-2">
    //             <InvoicePrint number = {number} getInvoiceNumber = {getInvoiceNumber} />
    //             <CustomerSelection customers = {customers} getCustomer = {getCustomer}/>
    //             <span className="mt-2 d-flex justify-content-between">
    //                     <h1 className="mt-2">Total Pembayaran</h1>
    //                     <h1>Rp. {totalPayment}, -</h1>
    //             </span>
    //        </section>
          
    //       <section className="mt-4 p-2 w-100  d-flex flex-column justify-content-center">

    //         {customer !== null && <button className="w-100 mb-3 btn btn-outline-info" onClick={handleState}>Masukkan Barang</button>}
    //         <TableTRansaksi carts = {carts} />

    //       </section>
           
            
           

    //         <Button onClick={handleBayar} className="mt-2">bayar</Button>
    //         <Button onClick={() => console.log(carts)} className="mt-2">lihat cart</Button>

            

    //          <div>

    //                 {state && createPortal(<InputProductsToCart products = {carts.length === 0 ? items : filteredProducts} handleAddToCart = {handleAddToCart} />, document.body)}

    //         </div>

           

    //         </div>)

    return(<h1>KasirTransaksiPage is under construction</h1>)


}