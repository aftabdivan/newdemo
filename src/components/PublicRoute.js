import React from 'react';
import { Route, Redirect, useNavigate, Routes } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({element: element, restricted, ...rest}) => {
    const redirect=useNavigate()
    return (
        <Routes>
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                redirect("/dashboard")
            : <element {...props} />
        )} />
        </Routes>
    );
};

export default PublicRoute;