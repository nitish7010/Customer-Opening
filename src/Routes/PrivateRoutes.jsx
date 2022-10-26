import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isAuthenticated } from '../Helpers/helpers'
import Login from '../Login/Login'


function PrivateRoutes({Component, path}) {
    console.log({Component})
  return (
    <React.Fragment>
    <Route 
        path={path}
        element= {isAuthenticated() ? <Component /> :<Login/>}
        />
        </React.Fragment>
  )
}

export default PrivateRoutes