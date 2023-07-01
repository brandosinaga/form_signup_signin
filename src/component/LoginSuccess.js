import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import LoginKelolaCard from './LoginKelolaCard';



export default function LoginSuccess({account}){

    const {nama_user, id_user, email,city} = account[0];

    const Kelola = [{id : 0, title : "Kelola Produk"}, {id : 1, title : "Kelola Pelanggan"}]



    return(<div className="container-lg p-4">
                    
    <section className="mb-3 p-2 row">

         <span className="border border-4 p-2 text-center rounded  col-8"><h3>{nama_user}</h3></span>
         <span className="border border-4 col-4 p-2 text-center rounded bg-dark text-light"><h3>{id_user}</h3></span> 
         <span className="col-12 mt-4"></span>
         
         <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Email</h5></span>
         <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{email}</h5></span> 

         <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Kota</h5></span>
         <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{city}</h5></span> 
        
     </section>


     <section className="border border-dark rounded p-4 d-flex flex-wrap justify-content-around">
         {Kelola.map(item => <LoginKelolaCard key={item.id} title={item.title} />)}
     </section>

        <div className="d-flex justify-content-around p-3 mt-4">
                <button type="button" className="btn btn-outline-dark w-100 btn-transaksi p-3">
                    <Link to={'/transaksi'}>Transaksi</Link>
                </button>
        </div>

 </div>)


}