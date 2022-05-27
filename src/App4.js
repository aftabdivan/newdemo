import React from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


  const App4=()=>{
    return (
        <BrowserRouter>
          <Routes>
            <PublicRoute restricted={false} element={<Home/>} path="/" exact />
            <PublicRoute restricted={true} element={<SignIn/>} path="/signin" exact />
            <PrivateRoute element={<Dashboard/>} path="/dashboard" exact />
          </Routes>
        </BrowserRouter>
      );
  }
    
  

export default App4;