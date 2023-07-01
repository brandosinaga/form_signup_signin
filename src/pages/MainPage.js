import { Link } from "react-router-dom";


export default function MainPage({dataCust}){


    return(<>
                <Link to={"/login"}><h1>Login Disini</h1></Link>
                <Link to={"/daftar"}><h1>Daftar Disini</h1></Link>
                <Link to={"/onlineshop"}><h1>OnlineShop Disini</h1></Link>
                
            </>    
                )
}