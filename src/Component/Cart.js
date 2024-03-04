import React, { useContext, useState } from 'react';
import ReactStars from 'react-stars';
import { MyContext } from '../App';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Cart = () => {
  const { cart } = useContext(MyContext);

  // Initialize state for product quantities
  const [productQuantities, setProductQuantities] = useState({});

  const onAdd = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const onRemove = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const calculateOrderSummary = () => {
    const totalItems = Object.values(productQuantities).reduce((acc, quantity) => acc + quantity, 0);
    const shippingCost = cart?.cart?.reduce((acc, product) => acc + product.shipping, 0) || 0;
    const totalPrice = cart?.cart?.reduce(
      (acc, product) => acc + product.price * (productQuantities[product.key] || 0),
      0
    ) || 0;

    return {
      totalItems,
      shippingCost,
      totalPrice,
    };
  };

  const orderSummary = calculateOrderSummary();

  return (
    <div>
      <section className="bg-dark-subtle">
        <div className="d-flex justify-content-center my-4">
          <div className="col-md-8">
            <h2>Item List</h2>
            <ul>
              {cart && cart.cart && cart.cart.map((product) => (
                <div key={product.key}>
                  <li className="bg-secondary-subtle border-4">
                    <div className="container d-flex justify-content-center mt-50 mb-50">
                      <div className="row">
                        <div className="col-md-10">
                          <div className="card card-body">
                            <div className="media align-items-center d-flex align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                              <div className="mr-2 mb-3 mb-lg-0">
                                <img src={product.img} width="150" height="150" alt="" />
                              </div>
                              <div className="media-body">
                                <h6 className="media-title font-weight-semibold">
                                  <a href="#" data-abc="true">{product.name}</a>
                                </h6>
                                <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                  <li className="list-inline-item">
                                    <a href="#" className="text-muted" data-abc="true">
                                      {product.category}
                                    </a>
                                  </li>
                                </ul>
                                <div className="text-muted bg-info-subtle">
                                  Product Total = ${product.price} <span>&#215;</span>{' '}
                                  {productQuantities[product.key] || 0} = $
                                  {product.price * (productQuantities[product.key] || 0)}
                                </div>
                              </div>
                              <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                <h3 className="mb-0 font-weight-semibold">{product.price}</h3>
                                <div className="d-inline-block">
                                  <ReactStars count={5} value={product.star} size={24} color2={'#ffd700'} />
                                </div>
                                <div className="p-2">
                                  <div className="p-3 d-flex">
                                    <div className="badge">
                                      <a
                                        href="#"
                                        onClick={() => onRemove(product.key)}
                                        data-toggle="tooltip"
                                        title="Remove Rule"
                                      >
                                        <FaMinus />
                                      </a>
                                    </div>
                                    <div>
                                      <span className="p-3">{productQuantities[product.key] || 0}</span>
                                    </div>
                                    <div className="badge">
                                      <a
                                        href="#"
                                        onClick={() => onAdd(product.key)}
                                        data-toggle="tooltip"
                                        title="Add Another Rule"
                                      >
                                        <FaPlus />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card card-body mt-3">
                          <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                            {/* ... (same structure as the first card) */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <h2>Order Summary</h2>
            </div>
            <div className="p-5">
              <h3>Total Items: {orderSummary.totalItems}</h3>
              <h3>Shipping: ${orderSummary.shippingCost}</h3>
              <h3>Total: ${orderSummary.totalPrice}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
