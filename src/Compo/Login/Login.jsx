import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div >
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Login;