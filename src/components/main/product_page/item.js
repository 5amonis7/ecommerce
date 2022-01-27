import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from 'uuid';

const item = ({ product, changePage, getCart }) => {

  function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      getCart(productNumbers + 1)
    }else{
      localStorage.setItem('cartNumbers', 1);
      getCart(1)
    }

    setItems(product)
  }

  function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

      if(cartItems[product.tag] === undefined){
        cartItems = {
          ...cartItems,
          [product.tag]: product
        }
        product.inCart = 0;
      }
        cartItems[product.tag].inCart += 1
        }else{
          product.inCart = 1;
          cartItems = {
            [product.tag]: product
      }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }

  function totalCost(){

    let cartCost = localStorage.getItem('totalCost');
    

    if(cartCost != null){
      cartCost = parseFloat(cartCost)
      localStorage.setItem('totalCost', cartCost + product.price)
    }else{
      localStorage.setItem("totalCost", product.price);
    }

  }

  function execute(){
    cartNumbers()
    totalCost()
  }

  

  return <div className="showing">

            <button onClick={changePage} className="arrow"><FontAwesomeIcon icon={faArrowLeft} /></button>

            <h1>{product.title}</h1>
            <img src={product.img} alt='product' />

            <div className="middle">
              <div className='stars'>
                  {[...Array(5)].map((star, i) => {

                      const ratingValue = i + 1

                  return <FontAwesomeIcon color={ratingValue <= product.rating ? "yellow": "grey"}  key={uuidv4()} className='star' icon={faStar} value={ratingValue} />
                  })}
              </div>
              <h2>${product.price}</h2>
            </div>

            <p>{product.description}</p>

            <button onClick={execute} className='addCart'>Add to cart</button>

        </div>;
};

export default item;
