import React, { useEffect, useState } from "react";
import jsonData from './fakeData/products.json'
import ReactStars from "react-rating-stars-component";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import { useReducer } from 'react';
import cartReducer from "./CartReduser";
import { useContext } from 'react';
import { MyContext } from './App'; 




import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";


  function Home() {
    const { cart, dispatch } = useContext(MyContext);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setProducts(jsonData);
    }, []); // Added an empty dependency array
  
    // useEffect(() => {
    //   console.log("Updated Cart:", cart);
    // }, [cart]); // Log whenever the cart state changes
  
    const addToCart = (product) => {
      
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };

   return (
    <>
    
    <MDBContainer fluid className="my-5">
      <MDBRow >
      {
             
             products && products.map((product)=>{
                 
                 return(
            <div key={product.key} className="col-lg-4">
            <MDBCol  className="mb-4 mb-lg-0">
            <MDBCard>
              <MDBCardImage
                src={product.img}
                position="top"
                alt={product.name} style={{width:"fit-content"}}
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                <p className="text-truncate bg-danger mb-4 mb-md-0">
                Only {product.stock} left in stock-order soon
                </p>
                  <p className="small text-danger">
                    <s>${product.price}</s>
                  </p>
                </div>
  
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0"> {product.name}</h5>
                  <h5 className="text-dark mb-0">${product.price-10}</h5>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={()=>addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
                  <ReactStars
    count={5}
    // onChange={ratingChanged}
    value={product.star}
    size={15}
    activeColor="#ffd700"
    edit={false}
    />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol></div>
            
    )
})

}
     
      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default Home;

