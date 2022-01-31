import React, { useState, useEffect } from 'react';
import CartItem from './cartItem';


const Cart = ({ getCart }) => {


    const [ total, setTotal ] = useState(0)
    const [ showingProducts, setShowingProducts] = useState([])
    const [ extra, setExtra ] = useState(0)
    const [ percent, setPercent ] = useState(2)

    function refreshCart(item){
        setShowingProducts(item)
    }


    function addShipping(e){
        let value = e.target.value
        switch(value){
            case 'none':
                setExtra(0)
                break;
            case 'standard':
                setExtra(4.99)
                break;
            case 'fast':
                setExtra(6.99)
                break;
            case 'express':
                setExtra(10.99)
                break;
        }
    }

    

    useEffect(() => {
        let cost = JSON.parse(localStorage.getItem('totalCost'))
        let products = JSON.parse(localStorage.getItem('productsInCart'))
        if(products) setShowingProducts(Object.values(products))
        if(cost){
            setTotal(cost)
        }else{
            setTotal(0)
        }
    }, [])

    function RefreshTotal() {
        let cost = JSON.parse(localStorage.getItem('totalCost'))
        setTotal(cost)
      }

    function discount(e){
        let value = e.target.value
            if(value === 'hired'){
                setPercent(0)
            }else if(value === 'maybe'){
                setPercent(.5)                
            }else if(value === ''){
                setPercent(2)
            }
    }



  return <div className="cart">
            <h1 className="cart-title">Cart</h1>


            <div className="cart-test">
                <div className="cart-content">
                    <h4>Product</h4>
                    <h4>Amount</h4>
                    <h4>Price</h4>
                </div>

                <div className="cart-products">
                    {Object.values(showingProducts).map((item, index) => <CartItem refresh={refreshCart}  RefreshTotal={RefreshTotal} getCart={getCart} key={index} item={item} />)
                }
                </div>
            </div>

            <div className="cart-summary">
                <h1>Summary</h1>

                <div className="cart-promo">
                    <label htmlFor='code'>Promo Code</label>
                    <input onChange={discount} type="text" className="input" name='code' />
                </div>

                <div className="cart-delivery">
                    <label htmlFor='shipping'>Shipping</label>
                    <select onClick={addShipping} type="text" className='shipping' name='shipping'>
                        <option value="none">None</option>
                        <option value="standard">Standard  $4.99</option>
                        <option value="fast">Fast  $6.99</option>
                        <option value="express">Express  $10.99</option>
                    </select>
                </div>

                <hr className='cart-line' />

                <div className="cart-checkout">
                    <button type="submit" className="chekout">Checkout</button>
                    <p>Total: ${
                            percent === 0 ? 0.00 + extra:
                            percent === .5 ? ((total * .5) + extra).toFixed(2):
                            (parseFloat(total) + parseFloat(extra)).toFixed(2)
                        }</p>
                </div>

            </div>


        </div>;
};

export default Cart;
