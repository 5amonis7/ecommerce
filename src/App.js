import './components/styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader"
import Nav from "./components/nav/nav"
import Menu from './components/nav/menu'
import React, { useState, lazy, Suspense, useEffect } from 'react'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import About from './components/main/about'
import Contact from './components/main/contact'
import Shipping from './components/main/shipping'
import Cart from './components/main/product_page/cart'
const Work = lazy(() => import("./components/main/product_page/work"));
const Hiking = lazy(() => import("./components/main/product_page/hiking"));
const School = lazy(() => import("./components/main/product_page/school"));


function App() {

  const [ cartAmount, setCartAmount ] = useState()


  useEffect(() => {
    let total = JSON.parse(localStorage.getItem('cartNumbers'))
    if(total == 0) localStorage.setItem('totalCost', '0')
    }, [])

    
  

  window.onload = RefreshCart()
  function RefreshCart() {
    useEffect(() => {
      setCartAmount(localStorage.getItem('cartNumbers'))
    }, [])
  }
  
  function getCart(obj){
    setCartAmount(obj)
  }

  const [ menu, setMenu] = useState(false)
  const [ productOpen, setProductOpen ] = useState(false)
 

  function changeShape() {
      if(!menu) {
          setMenu(true)
      }else{
          setMenu(false)
      }
  }
  function closeMenu(){
    if(menu === true){
      setMenu(false)
    }
  }

  function changePage(){
    setProductOpen(!productOpen)
  }
  function closePage(){
    setProductOpen(false)
  }

 


  return (
    <div onClick={closeMenu} className="App">
      <Nav cartAmount={cartAmount} state={menu} onClick={changeShape} />
      <Menu onClick={changeShape} state={menu} closePage={closePage}/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/ecommerce' element={<Main />} />
          <Route path='/school' element={<School getCart={getCart} productOpen={productOpen} changePage={changePage} />} />
          <Route path='/hiking' element={<Hiking getCart={getCart} productOpen={productOpen} changePage={changePage} />} />
          <Route path='/work' element={<Work getCart={getCart} productOpen={productOpen} changePage={changePage} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/cart' element={<Cart getCart={getCart} />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
