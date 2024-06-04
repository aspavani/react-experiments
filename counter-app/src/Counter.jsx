import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Counter(props) {

    let {initialCount} = props;
    
    initialCount = ((initialCount === undefined) ? 0 : initialCount);
    let [count, setCount] = useState(initialCount);

    const incrementCount = () => {
        setCount(++count > 20 ? 20 : count);
    }

    const decrementCount = () => {
        setCount(--count < 0 ? 0 : count);
    };

    const resetCount = () => {
        setCount(initialCount);
    }

    return (<>
    
    
    <button className="btn btn-outline-primary" type="button" id="decrement" onClick={decrementCount}>Decrement</button>
    <span id="count" className={"badge m-4 " + (count > 10 ? "bg-danger" : "bg-success")}>{count}</span> 
    <button className="btn btn-outline-primary mt" type="button" id="increment" onClick={incrementCount}>Increment</button>
    <br />
    <button className="btn btn-outline-primary" type="reset" id="reset" onClick={resetCount} style={{display:(count == initialCount ? "none" : "")}}>Reset</button>
    </>);

    

}


export default Counter;