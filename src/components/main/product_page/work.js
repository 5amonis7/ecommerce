import React from 'react';
import work from './inventory/work'
import Product from './product'

const products = () => {
  return <div className='product'>
            {work.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)} 
        </div>;
};

export default products;
