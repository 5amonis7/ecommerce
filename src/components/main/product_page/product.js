import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from 'uuid';


const Product = ({ item, changePage, showItem }) => {

    function Item(){
        let productShowing = {
            title:item.title,
            description:item.description,
            img:item.img,
            rating:item.rating,
            price:item.price,
            tag:item.tag
        }
        showItem(productShowing)
        changePage()
    }


  return <div className='item'>

        
            <div className='img'>
                <img onClick={Item}  loading='lazy' src={item.img} alt='product' />
            </div>


            <div className='stars'>
                {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1

                return <FontAwesomeIcon color={ratingValue <=item.rating ? "yellow": "grey"}  key={uuidv4()} className='star' icon={faStar} value={ratingValue} />
                })}
            </div>
            <p className='back-pack'>{item.title}</p>
            <p className='price'>${item.price}</p>
        </div>;
};

export default Product;
