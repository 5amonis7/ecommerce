import React from 'react';
import Product from './product'
import hiking from './inventory/hiking'


const Products = (props) => {
    
  return <div className='product'>
            {hiking.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)} 
        </div>;
};

export default Products;
