import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product already exists in the cart
      const existingProductIndex = state.cart.findIndex(product => product.key === action.payload.key);

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1 // Update quantity
        };

        return {
          ...state,
          cart: updatedCart
        };
      } else {
        // Product doesn't exist in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }] // Add new product with quantity 1
        };
      }

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product.key === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        })
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter(product => {
          if (product.key === action.payload) {
            return product.quantity > 1; // Remove product only if quantity is greater than 0
          }
          return true;
        }).map(product => {
          if (product.key === action.payload) {
            return { ...product, quantity: Math.max(product.quantity - 1, 0) };
          }
          return product;
        })
      };

    default:
      return state;
  }
}
