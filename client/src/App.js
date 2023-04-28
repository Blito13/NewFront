import logo from './logo.svg';
import styles from './App.css';
import Home from "./components/Home";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import React ,{ useState} from 'react';
import Session from './components/Session';

function App() {
  const [isOpen ,setIsOpen] = useState(false);
  const store = generateStore();
  const showReg = () => {
    console.log("dafuncio")
  }
  return (
    <Provider store={store}>
     <NavBar showReg={setIsOpen}/>
     {
      isOpen?
      <LogIn/>
      :null
     }

    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/start' element={<Start/>}/>
      <Route path = '/create' element={<Create/>}/>
    
    </Routes>
    </Provider>
  );
}

export default App;
