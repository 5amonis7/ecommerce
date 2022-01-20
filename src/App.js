import './components/styles/App.scss';
import { Router, Route } from "react-router-dom";
import Nav from "./components/nav/nav"
import Menu from './components/nav/menu'
import { useState } from 'react'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function App() {

  const [ menu, setMenu] = useState(false)

  function changeShape() {
    console.log('clicked')
      if(!menu) {
          setMenu(true)
      }else{
          setMenu(false)
      }
  }

  return (
    <div className="App">
      <Nav state={menu} onClick={changeShape} />
      <Menu state={menu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
