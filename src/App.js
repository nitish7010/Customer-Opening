import logo from './logo.svg';
import './App.css';
import RoutesComponent from './Routes/Routes';
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
