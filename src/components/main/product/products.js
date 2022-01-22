import React from 'react';
import Product from './product'
import hiking from './hiking/hiking'
import school from './school/school'
import work from './work/work'

const Products = (props) => {

    
  return <div className='product'>
            {props.product === 'hiking' ? hiking.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)
            : props.product === 'work' ? work.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)
            : school.map(item => <Product key={item.id} rating={item.rating} title={item.title} img={item.img} price={item.price} />)
            }
        </div>;
};

export default Products;
