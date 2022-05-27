import React, { useContext } from 'react';
import  {FirstName,LastName}  from './App';
import ComC from './ComC'

const ComB=()=>{

    const fname=useContext(FirstName);
    const lname=useContext(LastName);

    return(
        <>
            <h1>My Name is {fname} {lname}</h1>
        </>
    )
}

export default ComB;