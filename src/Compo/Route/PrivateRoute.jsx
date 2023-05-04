import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
  const {user,load}=useContext(AuthContext);
  if (load) {
   return <div className='d-flex justify-content-center align-items-center'>
    <Spinner animation="grow" variant="primary" />
   </div>
  }
 const location=useLocation();

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{from: location}} replace ></Navigate> ;
};

export default PrivateRoute;