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

function App() {
  const [cartArr, setCarArr] = useState([])

  const handlePush = (meal) => {
    const nArr = cartArr.concat([meal])
    setCarArr(nArr)
  }
  console.log(cartArr)
  // const arr = []
  // const arr2 = arr.concat(["hola"])
  // console.log(arr2)
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
          <Cart/>
        </Route>
        <Route path="/">
          <Home onPush={handlePush}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
