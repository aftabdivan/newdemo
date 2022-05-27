import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({element: element, ...rest}) => {

    const redirect=useNavigate();

    return (
        
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
          <Routes>
          <Route {...rest} render={props => (
            isLogin() ?
                <element {...props} />
            : redirect("/signin")
        )} /> 
        </Routes>
        
    );
};

export default PrivateRoute;