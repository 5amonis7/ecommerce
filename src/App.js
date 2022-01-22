import './components/styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav"
import Menu from './components/nav/menu'
import { useEffect, useState } from 'react'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Hiking from './components/main/product_page/hiking'
import School from './components/main/product_page/school'
import Work from './components/main/product_page/work'

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
        <Route path='/school' element={<School />} />
        <Route path='/hiking' element={<Hiking />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
