import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Time from './Time';

const App = () =>{
    const state = useState();

const [count,setCount] = useState(0);
 

const DecNum =() =>{
    if (count >0){
    setCount(count - 1);
    }
    else{setCount(0);
        alert("you are reached to the limit..")   }
  
}
const IncNum =() =>{
    setCount(count+ 1);
}
      return(<>     <Switch>
                     <Route  path="/" Component={Time} />
                    </Switch>
             
             <h1> {count}</h1>
             <button onClick={IncNum}> Increment(+) </button>
             <hr />
             <button onClick={DecNum}>Decrement(-)</button>
      </>

      );

};

export default App;
 


