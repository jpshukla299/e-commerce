import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../App';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
// import '../App.css'



function Header() {
  const { cart } = useContext(MyContext);
  
    return (
      <>
       <nav className="bg-info-subtle navbar navbar-expand-lg navbar">
        <div></div>
      <div className="container">
        <Link className="navbar-brand" to="/">
          E- Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <FaCartShopping />
                Cart({cart.cart.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
    
  export default Header;