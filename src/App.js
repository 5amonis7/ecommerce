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
  const [ path, setPath ] = useState('')

  function PathName(){
    useEffect(() => {
      setPath(window.location.pathname)
    }, [])
  }
  window.onload = PathName()

  const div = document.getElementsByClassName('product')

  function Check(){
    useEffect(() => {
      if(div === null){
        console.log('not here')
      }else {
        console.log('here')
      }
    }, [])
  }

  Check()

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
      <Menu onClick={changeShape} state={menu} />
      <Routes>
        <Route path='/ecommerce' element={<Main />} />
        <Route path={window.location.pathname} element={<Products product={window.location.pathname.slice(1)} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
