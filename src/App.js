import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Form from './Form/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
