/* import logo from './logo.svg'; */
import Home from "./components/Home";
import DataNumbersComponent from "./components/DataNumbersComponent";
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
      <Route path = '/create' element={<Create/>}/>
      <Route path='/numbers' element={<DataNumbersComponent/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
