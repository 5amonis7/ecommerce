import React from 'react';
import school from './inventory/school'
import Product from './product'

const products = () => {


  return <div className='product'>
            {school.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)} 
        </div>;
};

export default products;
