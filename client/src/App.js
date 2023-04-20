import logo from './logo.svg';
import styles from './App.css';
import Home from "./components/Home";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';

import Session from './components/Session';
function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
     <NavBar/>
    
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/start' element={<Start/>}/>
      <Route path = '/create' element={<Create/>}/>
    
    </Routes>
    </Provider>
  );
}

export default App;
