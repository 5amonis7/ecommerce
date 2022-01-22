import './components/styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav"
import Menu from './components/nav/menu'
import React, { useState, lazy, Suspense } from 'react'
import Main from './components/main/main'
import Footer from './components/footer/footer'
const Work = lazy(() => import("./components/main/product_page/work"));
const Hiking = lazy(() => import("./components/main/product_page/hiking"));
const School = lazy(() => import("./components/main/product_page/school"));

function App() {

  const [ menu, setMenu] = useState(false)
 

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/ecommerce' element={<Main />} />
          <Route path='/school' element={<School />} />
          <Route path='/hiking' element={<Hiking />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
