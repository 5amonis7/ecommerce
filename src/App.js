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
  const [ product, setProduct ] = useState('')
  const [ path, setPath ] = useState()
  

  function productChoice(obj){
    setProduct(obj.toLowerCase())
    setPath(`/${obj.toLowerCase()}`)
  }


  function PathName(){
    
    useEffect(() => {
      let path = window.location.pathname;
      if (path === '/school'){
        setPath(path)
      }else if(path === '/work'){
        setPath(path)
      }else if(path === '/hiking'){
        setPath(path)
      }
    }, [])
  }
  PathName()



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
      <Menu onClick={changeShape} product={productChoice} state={menu} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path={path} element={<Products product={product} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
