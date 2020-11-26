import './assets/main.css'
import './App.css';
import Header from './components/Header/Header';
import Home from 'pages/Home/Home';

function App() {
  return (
    <div className="App bg-bodycolor text-textcolor min-h-screen">
      <div className="custom-shape-divider-top-1606414459">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
        </svg>
      </div>
      <Home/>
    </div>
  );
}

export default App;
