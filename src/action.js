// actions.js

import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';

export const increaseQuantity = (productId) => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});
