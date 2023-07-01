import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";


export default function InvoicePrint(props){

    // states

    const {number, getInvoiceNumber} = props;

    const serial = "T";

    const [num_1, setNum1] = useState(0);

   
 


    useEffect(() => {

        getInvoiceNumber(`${serial}-${num_1}-${number}`);


        if(number === 0 ){

                     setNum1(prevNum => prevNum + 1);
      
        }    


    }, [number])


    

    return(<div className="mt-2">
    
            <h3>No.Faktur</h3>

                
                <input className="form-control" value={`${serial} - ${num_1} - ${number}`} type="text" placeholder="Readonly input here…" readOnly></input>         
    
            </div>)

                 

               


}