import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const CartItems = ({ item, getCart, RefreshTotal }) => {




// increase amount
  function increase(){

    // total cost
    let cartCost = localStorage.getItem('totalCost');
    localStorage.setItem('totalCost', parseFloat(cartCost) + item.price)  
    

    // cart amount
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', productNumbers + 1);
    getCart(productNumbers + 1)

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    cartItems = {
      ...cartItems,
      [item.tag]: item
    }
    cartItems[item.tag].inCart += 1
      

    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 
    RefreshTotal()
  
  }



  // decrease item
  function decrease(){

    // total cost
    let cartCost = localStorage.getItem('totalCost');
    localStorage.setItem('totalCost', cartCost - item.price)  


    // cart amount
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', productNumbers - 1);
    getCart(productNumbers - 1)

    // items in cart
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    cartItems = {
      ...cartItems,
      [item.tag]: item
    }

    if(cartItems[item.tag].inCart >= 2){

        cartItems[item.tag].inCart -= 1

        }else if(cartItems[item.tag].inCart == 1){
          delete cartItems[item.tag]
          localStorage.setItem('productsInCart', cartItems)
          window.location.reload()
      }  

    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 
    RefreshTotal()
  }

  

  return <div className='cart-product'>

            <div className='cart-product_product'>
              <p>{item.title}</p>
              <img src={item.img} />
            </div>

            <div className='cart-product_amount'>
              <FontAwesomeIcon className='arrow' onClick={decrease} icon={faArrowLeft} />
              <p>{item.inCart}</p>
              <FontAwesomeIcon className='arrow' onClick={increase} icon={faArrowRight} />
            </div>

            <p className='cart-product_price'>${item.price}</p>

        </div>;
};

export default CartItems;
