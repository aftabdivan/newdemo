import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/Home";
 import Dashboard from "./components/Dashboard";
// import SignIn from "./components/SignIn";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";
import Auth from "./Pages/auth";
import Profile from "./Pages/profile";

const App3 = () => {

  const[auth,setAuth]=useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);


  return (
  
      <Routes>
      {!auth && (
        <Route path="/auth" 
        element={<Auth authenticate={()=>setAuth(true)}/>}
        />   
      )}

        {auth && <>
          <Route path="/profile"
          element={<Profile logout={()=>setAuth(false)}/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </>
        
        }
        <Route path="/dashboard" element={<Dashboard />}/>

          <Route path="*" element={<Navigate to={auth ? "/profile" : "/auth"} />} />

        {/* <PublicRoute restricted={false} element={<Home/>} path="/" exact /> 
        <PublicRoute restricted={true} element={<SignIn/>} path="/signin" exact />
        <PrivateRoute element={<Dashboard />} path="/dashboard" exact /> */}
      </Routes>

  );
};

export default App3;
