import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white text-lg font-bold mr-4">
          Ecommerce Site
        </Link>
      </div>
      <div className="flex items-center">
      <Link to="/cart" className="text-white relative">
          <i className="fas fa-shopping-cart"></i>
          <span className="ml-2 mr-8">Cart</span>
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
