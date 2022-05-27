import React,{ createContext } from 'react';
import './App.css';
import ComA from './ComA'
import ComB from './ComB';

let FirstName = createContext();
const LastName=createContext();
function App() {

  return (
    <>
    <FirstName.Provider value={"Appu"}>
    <LastName.Provider value={"Divan"}>
    <ComB/>
    </LastName.Provider>
    </FirstName.Provider>
    </>
  );
}

export { FirstName,LastName };
export default App;