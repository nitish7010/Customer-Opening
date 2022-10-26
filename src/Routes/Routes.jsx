import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from '../Form/Form';
import { isAuthenticated } from '../Helpers/helpers';
import Login from '../Login/Login';
import PrivateRoutes from './PrivateRoutes';
import {useNavigate} from 'react-router-dom'

function RoutesComponent() {
    console.log(isAuthenticated())

  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route 
        path={'/form'}
        element= {<Form />}
        />
    </Routes>
  </Router></div>
  )
}

export default RoutesComponent;