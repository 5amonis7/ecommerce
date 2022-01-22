import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from 'uuid';


const Product = (props) => {




  return <div className='item'>

        

                <img  loading='lazy' src={props.img} alt='product' />


            <div className='stars'>
                {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1

                return <FontAwesomeIcon color={ratingValue <= props.rating ? "yellow": "grey"}  key={uuidv4()} className='star' icon={faStar} value={ratingValue} />
                })}
            </div>
            <p className='back-pack'>{props.title}</p>
            <p className='price'>{props.price}</p>
        </div>;
};

export default Product;
