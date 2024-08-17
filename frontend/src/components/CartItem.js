import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCartQty, removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(updateCartQty(item._id, item.qty + 1));
  };
  
  const decreaseQty = () => {
    if (item.qty > 1) {
      dispatch(updateCartQty(item._id, item.qty - 1));
    } else {
      dispatch(removeFromCart(item._id));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item._id));
  };
   
  return (
    <div className="flex items-center justify-between border-b p-2">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-medium">{item.name}</h3>
      </div>
      <div className="flex items-center">
        <button onClick={decreaseQty} className="bg-gray-200 w-8 h-8 flex items-center justify-center">-</button>
        <span className="px-4 min-w-[2rem] w-10 h-8 flex items-center justify-center bg-gray-100">{item.qty}</span>
        <button onClick={increaseQty} className="bg-gray-200 w-8 h-8 flex items-center justify-center">+</button>
      </div>
      <p className="ml-4">₹{(item.price * item.qty).toFixed(2)}</p>
      <button
        onClick={handleRemove}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
