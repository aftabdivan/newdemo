import React, { useEffect, useState } from 'react'
import Contact from './Contact'
//import db from "./FireBase";

const App1 = () => {
  const[users,setUsers]=useState([]);
  //const usersCollectionRef=collection(db)
  useEffect(()=>{
    const getUsers=async()=>{

    }
    getUsers();
  },[])
    return (
    <div>
        <Contact/>
    </div>
  )
}

export default App1