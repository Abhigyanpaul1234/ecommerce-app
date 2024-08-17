
export const addToCart = (product, qty = 1) => (dispatch, getState) => {
  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      ...product,
      qty: qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: 'CART_REMOVE_ITEM',
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const updateCartQty = (id, qty) => (dispatch, getState) => {
  dispatch({
    type: 'CART_UPDATE_ITEM_QTY',
    payload: { id, qty },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

