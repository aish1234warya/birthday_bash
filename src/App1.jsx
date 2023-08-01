import React from 'react';

import { ReactDOM } from 'react-dom';
import { add,sub,div,mul } from './components/Calci';
let count=1;
const IncNum=()=>{
   
    console.log("clicked" + " count++");
}


const App1=()=>{
    return(
        <>
       
        <h1>0</h1>
        
        <button onClick={IncNum}> Click Me </button>
        
        </>

    )
}
export default App1;