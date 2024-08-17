import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import ProductCard from '../components/ProductCard';

const Home = () => {


  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { products } = productList;

  useEffect(() => {
  
    dispatch(listProducts());
  }, [dispatch]);



  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-200">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;