/* import logo from './logo.svg'; */
import Home from "./components/Home";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Route, Routes } from 'react-router-dom';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <NavBar/>
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/start' element={<Start/>}/>
      <Route path = '/create' element={<Create/>}/>
      {/* <Route path = '/login' element={<LogIn/>}/> */}
    </Routes>
    </Provider>
  );
}

export default App;
