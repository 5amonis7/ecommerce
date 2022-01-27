import React, { useState, useEffect } from 'react';
import CartItem from './cartItem';


const Cart = () => {

    const [ amount, setAmount ] = useState()
    const [ total, setTotal ] = useState()
    const [ showingProducts, setShowingProducts] = useState([])

    

    useEffect(() => {
        let total = JSON.parse(localStorage.getItem('cartNumbers'))
        let cost = JSON.parse(localStorage.getItem('totalCost'))
        let products = JSON.parse(localStorage.getItem('productsInCart'))
        if(products) setShowingProducts(products)
        if(cost) setTotal(cost)
        if(total) setAmount(total)
    }, [])




  return <div className="cart">
            <h1 className="cart-title">Cart</h1>


            <div className="cart-test">
                <div className="cart-content">
                    <h4>Product</h4>
                    <h4>Amount</h4>
                    <h4>Price</h4>
                </div>

                <div className="cart-products">
                    {Object.values(showingProducts).map((item, index) => <CartItem key={index} item={item} />)
                }
                </div>
            </div>

            <div className="cart-summary">
                <h1>Summary</h1>

                <div className="cart-promo">
                    <label htmlFor='code'>Promo Code</label>
                    <input type="text" className="input" name='code' />
                </div>



            </div>


        </div>;
};

export default Cart;
