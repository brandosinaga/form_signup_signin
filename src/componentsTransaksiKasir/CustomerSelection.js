import { useMemo, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomerSelection(props){

  // states

    const {customers, getCustomer} = props;
    
    const elem = useRef();

    const [customer, setCustomer] = useState('');


    // functions

    const options = useMemo(() => {
      

          return customers.reduce((a,e) => {
      
                  a.push(e)

                       return a
    
              } ,[{name : "select Customer", id : "000"}])

                  .map(item => <option key={item.id}>{item.name}</option>);
    
    })


  


    return(<div className="mt-2">
                <h3>Customer</h3>
                <select className="form-control" ref={elem}  onChange={(e) => getCustomer(elem.current.value)} >
                        
                           {options}  

                </select> 
                
                <Link href={"/KelolaCustomers"} style={{textDecoration : "none", fontStyle : "italic"}}>Kelola Customers</Link>
           
            </div>)

    }
