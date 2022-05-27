import React, { useState } from "react";
import "./index.css";
import db from "./FireBase";
//import {collection} from "firebase/firestore";
import { addDoc,collection } from "firebase/firestore";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ad=collection(db,"users")

  const submitHandler=async(e)=>{
    e.preventDefault();
    await addDoc(ad,{
      email:email,
      password:password
    })
    /* db.collection("login").add({
      email:email,
      password:password
    }) */
    /* .then(()=>
    alert("message submitted")
    )
    .catch((error)=>{
      alert(error)
    }) */
  }

  return (
    <div className="main_div">
    <form onSubmit={submitHandler}>
      <input
        className="input_field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <br />
      <input
        className="input_field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
