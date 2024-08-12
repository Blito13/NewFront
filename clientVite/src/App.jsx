/* import logo from './logo.svg'; */
import Home from "./components/Home";
import NavBar from "./components/NavBar";
/* import configureStore from "./store"; */
import { Route, Routes } from 'react-router-dom';
import { PlayProvider } from "./context/play.jsx";


function App() {
  

  return (
    <PlayProvider>
      
      <Home/>
    </PlayProvider>
  );
}

export default App;
