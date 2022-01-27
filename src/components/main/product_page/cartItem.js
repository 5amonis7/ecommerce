import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const cartItems = ({ item }) => {

  return <div className='cart-product'>

            <div className='cart-product_product'>
              <p>{item.title}</p>
              <img src={item.img} />
            </div>

            <div className='cart-product_amount'>
              <FontAwesomeIcon className='arrow' icon={faArrowLeft} />
              <p>{item.inCart}</p>
              <FontAwesomeIcon className='arrow' icon={faArrowRight} />
            </div>

            <p className='cart-product_price'>${item.price}</p>

        </div>;
};

export default cartItems;
