//Single dependecies
// useEffect(()=>{code }, []);

import { useEffect, useState } from "react";

function UseEffect2(){
const[counter, setCounter]=useState(1);

    useEffect(()=>{

        alert("Welcome to Use Effect 2")
    }, []);

    return (<div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>+</button>
    </div>
    );
}

export default UseEffect2;