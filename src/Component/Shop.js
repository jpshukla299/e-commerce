import React, { useEffect, useState } from 'react'
import jsonData from '../fakeData/products.json'
import Product from './Product';
import Cart from './Cart';


const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState();

    useEffect(()=>{
        // fetch("./products.json")
        // .then(res => res.json())
        // .then(data =>setProducts(data));
        setProducts(jsonData)
        console.log('jsonData',jsonData)
        console.log('products',products)
    });
let addToCart = (product)=>{
    let exist = cart.find((element)=>
        product.key == element.key

    )
    if(!exist){
        product.quantity = 1
        setCart([...cart, product])
    }else{
        product.quantity += 1
        let news = [...cart]
        setCart(news)
        console.log("cart",cart)
    }


}

  return (
    <div className='d-flex'>
      <div>
         {
             
             products && products.map((product)=>{
                 
                 return(
                     <div key={product.key}>
            {/* < img src={product.img}/> {product.name} */}
            <Product addToCart={addToCart} product={product}/>
            </div>
    )
})

}
</div> 
<div>
     <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div></div>

    </div>
  )
}

export default Shop