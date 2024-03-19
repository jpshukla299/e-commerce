import { useContext, useState } from 'react';
import { MyContext } from '../App';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { Offcanvas, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
  const { cart } = useContext(MyContext);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
    <div>
    <nav className="bg-info-subtle navbar navbar-expand-lg navbar">
        <div> 
           </div>
   
    <div className='bg-info-subtle'>
    <GiHamburgerMenu style={{ fontSize: '2em' }} onClick={handleOffcanvasToggle} />


      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title onClick={<link to= '/'></link>}>E-Commerce</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <FaShoppingCart />
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
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    <div className="container">
        <Link className="navbar-brand" to="/">
          E- Commerce
        </Link>
        <Link className="nav-link" to="/cart">
              <FaShoppingCart />
                Cart({cart.cart.length})
              </Link>
      </div>
    </nav>
    </div>

    </>
  );
}

export default Header;
