import './components/styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav"
import Menu from './components/nav/menu'
import { useEffect, useState } from 'react'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Products from './components/main/product/products'

function App() {

  const [ menu, setMenu] = useState(false)
  const [ product, setProduct] = useState()

  function PathName(){
    useEffect(() => {
      let path = window.location.pathname
      if(path === '/hiking'){
        setProduct(path.slice(1))
      }else if(path === '/work'){
        setProduct(path.slice(1))
      }else if(path === '/school'){
        setProduct(path.slice(1))
      }
    }, [])
  }
  window.onload = PathName()

function ChangeProduct(obj){
  setProduct(obj.toLowerCase())
}

  function changeShape() {
      if(!menu) {
          setMenu(true)
      }else{
          setMenu(false)
      }
  }

  return (
    <div className="App">
      <Nav state={menu} onClick={changeShape} />
      <Menu onClick={changeShape} product={ChangeProduct} state={menu} />
      <Routes>
        <Route path='/ecommerce' element={<Main />} />
        <Route path={`/${product}`} element={<Products product={product} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
