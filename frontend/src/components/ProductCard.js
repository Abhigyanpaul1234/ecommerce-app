import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border m-6 p-1 flex flex-col w-80 hover:shadow-2xl bg-white">
      <div className="mb-2 h-80 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-w-full max-h-full object-fill"
        />
      </div>
      <h3 className="text-sm font-semibold truncate">{product.name}</h3>
      <p className="text-xs text-gray-600">Rs {product.price}</p>
      <button 
        onClick={addToCartHandler} 
        className="mt-1 bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-700 hover:shadow-sm h-9"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
