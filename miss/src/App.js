import logo from './logo.svg';
import styles from './App.css';
import Home from "./components/Home"
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';
function App() {
  const store = generateStore();
  return (
    <Provider store={store}>

    <Routes>
      <Route path = '/' element={<Home/>}/>
      
      
    </Routes>
    








  

    </Provider>
  );
}

export default App;
