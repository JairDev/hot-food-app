import './assets/main.css'
import './App.css';
import Header from './components/Header/Header';
import Home from 'pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from 'components/Cart/Cart';
import { useState } from 'react';

function thisItemExist(array, item, id) {
  // console.log(array, item.strMeal)
  const findIdx = array.findIndex(item => item.strMeal === id)
  return findIdx
}

function App() {
  const [cart, setCart] = useState([])

  const handleCart = (meal, qty, id) => {
    console.log(meal)
    const nObj = Object.assign({}, {
      ...meal,
      qty,
    })
    // console.log(nObj)
    const item = thisItemExist(cart, nObj, id)
    const nArr = [...cart].concat([nObj])
    if(item === -1) {
      setCart(nArr)
    }else {
      console.log("already exist")
    }
  }
  console.log(cart)

  return (
    <Router>
      <div className="App bg-bodycolor text-textcolor min-h-screen">
        <div className="custom-shape-divider-top-1606414459">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
          </svg>
        </div>
      <Switch>
        <Route path="/cart">
          <Cart meals={cart}/>
        </Route>
        <Route path="/">
          <Home onCart={handleCart}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
