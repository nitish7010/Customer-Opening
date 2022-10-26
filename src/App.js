import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Form from './Form/Form';
// import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import RoutesComponent from './Routes/Routes';

function App() {


  return (
    <div className="App">
      <RoutesComponent />
      {/* <Login /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
