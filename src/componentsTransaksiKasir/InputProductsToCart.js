import { useEffect, useRef, useState, useMemo } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import styles from '@/../../src/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

export default function InputProductsToCart(props){


    const {products, handleAddToCart} = props;

    const [name, setName] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const [state, setState] = useState(false);
    
    

    // functions

    
    const options = useMemo(() => {
      
       

        if(products.length > 0){

            return products.reduce((a,e) => {
    
                a.push(e)

                     return a
  
            } ,[{name : "select items", id : "000"}])

                .map(product => <option key={product.id}>{product.name}</option>);

        } else {

                    return [<option key={"000"}>semua barang sudah di cart</option>]
        }


        
  
  })



  const handleChange = (e) => {

            const item = e.target.value;

           if(item !== "select items"){

                    setName(item)
           } else {

                   setName(null)
           }

  }


  const handleAddQuantity = () => setQuantity(prevQ => prevQ + 1)

  const handleDecQuantity = () => setQuantity(prevQ => prevQ - 1);





    return(<div id="test_portal" className={styles.portal} >

               <Form>

                        <Form.Group className="mb-4 p-2">
                            <Form.Label>Nama</Form.Label>
                            <select className="form-control" onChange={handleChange} >
                        
                                    {options}  

                            </select> 
                            <Link href={"/KelolaProduk"} style={{textDecoration : "none", fontStyle : "italic"}}>Kelola Produk</Link>
                        </Form.Group>
                
                     <div className={styles.quantity}>


                        <Button className="mb-3 btn btn-outline-dark text-bolder w-25" onClick={handleAddQuantity}>+</Button>
                        <span className="w-50 d-flex justify-content-center"><h1>{quantity}</h1></span>
                        {quantity > 1 ?  <Button className="mb-3 btn btn-outline-dark text-bolder w-25" onClick={handleDecQuantity}>-</Button> : null}

                        </div>

               </Form>
                <button onClick={() => handleAddToCart({name, quantity})}>close</button>

    </div>)

}