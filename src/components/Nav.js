import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Nav(){
   const cart= useSelector((state) => state.cart)
   const list=useSelector((state)=>state.list)
   const signed = JSON.parse(localStorage.getItem('signed'));
   const signedd=useSelector((state)=>state.signed)

   

    return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-warning fw-bold fs-1" href="#">ShopiA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page"  to='/'>Home</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to='/products' exact >Products</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active text-info" aria-current="page"  to='/fave' >My WishList</Link>
        </li>
       
          <li><Link className="nav-link active text-warning" aria-current="page"  to='/cart'>{cart} Products in cart</Link></li>
         
  

      </ul>

      <form className="d-flex">

        <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Go</button>
      </form>
     <Link  className={" nav-link active "+(signedd===1?"invisible":"")} aria-current="page"  to='/signin' >Log in</Link>
      <Link className={" nav-link active "+(signedd===1?"invisible":"")} aria-current="page"  to='/register'>Register</Link>
     
    </div>
  </div>
</nav>
    </>)
}
