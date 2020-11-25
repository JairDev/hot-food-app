import './assets/main.css'
import './App.css';
import Header from './components/Header/Header';
import Home from 'pages/Home/Home';

function App() {
  return (
    <div className="App bg-bodycolor text-textcolor min-h-screen">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
