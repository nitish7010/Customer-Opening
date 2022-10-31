import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from '../Form/Form';
import Login from '../Login/Login';
import {useNavigate} from 'react-router-dom'
import CustomerList from '../CustomerList/CustomerList';

function RoutesComponent() {
    let navigate = useNavigate()

    useEffect(() => {
      const auth = localStorage.getItem("auth")
      if (!auth) {
        navigate("/")
      }
    },[])


  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/list' element = {<CustomerList />} />
      <Route 
        path={'/form/:id/:date'}
        element= {<Form />}
        />
    </Routes>
  )
}

export default RoutesComponent;