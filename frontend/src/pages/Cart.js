import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  return (
    <div className="flex justify-between p-6 bg-gray-200 min-h-screen">
      <div>
      <div className="w-[60rem] bg-white p-4 rounded shadow-sm min-h-[20rem]">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => <CartItem key={item._id} item={item} />)
        )}
      </div>
      </div>  

      <div className="w-[30rem] bg-white p-4 rounded shadow-sm h-72">
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Price Details</h3>
        <div className="flex justify-between mb-2">
          <span>Price ({cartItems.length} items)</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span className="text-green-500">− ₹{(subtotal * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Charges</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="flex justify-between mt-4 border-t pt-4 font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{(subtotal - subtotal * 0.1).toFixed(2)}</span>
        </div>
        <p className="text-green-500 text-sm mt-2">You will save ₹{(subtotal * 0.1).toFixed(2)} on this order</p>
      </div>
    </div>
  );
};

export default Cart;
