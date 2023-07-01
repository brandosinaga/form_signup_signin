
import {  useState } from 'react';
import {Form} from 'react-bootstrap';
import LoginSuccess from '../component/LoginSuccess';





export default function FormLogin({dataCust}){



    // states

    const [state, setState] = useState(null);

    const [account, setAccount] = useState ([]);



    



    // functions

    const handleLogin = (e) => {

            e.preventDefault();

           const formData = new FormData(e.target);

           const dataInput = {...Object.fromEntries(formData)};

           const result = dataCust.filter(item => ((item.password === dataInput.password) && (item.id_user === dataInput.id_user)) )

           const stateValue = result.length > 0 ?  true : false

           setState(stateValue);

           setAccount(result);

    }


  
    if(state === true){

        return(<LoginSuccess account={account} />)
    }



    return (


        <div className="d-flex flex-column justify-content-center align-items-center" style={{height : "100vh"}}>
        <Form className="border border-4 rounded p-4 w-75" onSubmit={handleLogin}>
         
            <Form.Group className="p-1">
                <Form.Label><h3>User ID</h3></Form.Label>
                <Form.Control type="text" name='id_user'  />
            </Form.Group>

           <Form.Group className="p-1 mt-4 mb-4">
                <Form.Label><h3>Password</h3></Form.Label>
                <Form.Control type="password" name='password' />
           </Form.Group>

           <Form.Group className="p-1 mt-4 mb-4 d-flex justify-content-center">
                <button className="btn btn-outline-success p-2 w-50" type='submit' >Login</button>
            </Form.Group>

                </Form>
                

           </div>
           
    )
}