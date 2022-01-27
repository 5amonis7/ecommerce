import React, { useState } from 'react';
import work from './inventory/work'
import Product from './product'
import Item from './item'

const Products = ({ productOpen, changePage, getCart }) => {


  const [ product, setProduct ] = useState({
    title: '',
    img: '',
    description: '',
    rating: '',
    price: '',
    tag: '',
}) 

function showItem(item){
  setProduct({
    title: item.title,
    description: item.description,
    img: item.img,
    rating: item.rating,
    price: item.price,
    tag: item.tag,
  })
}

  return <div className='product'>
            {!productOpen ? work.map(item => <Product changePage={changePage} showItem={showItem} key={item.id} item={item} />)
            : <Item getCart={getCart} product={product} changePage={changePage} />  
          }
        </div>;
};

export default Products;
