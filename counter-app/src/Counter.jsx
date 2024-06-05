import React, {Component, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Counter(props) {

    let {initialCount} = props;
    initialCount = ((initialCount === undefined) ? 0 : initialCount);
    
    let [count, setCount] = useState(initialCount);
    useEffect(() => {
        const newCount = Number(localStorage.getItem('count'));
        if (newCount) {
            setCount(newCount);
        }
    }, []);
    const incrementCount = () => {
        setCount(++count > 20 ? 20 : count);
        localStorage.setItem('count', count);
    }

    const decrementCount = () => {
        setCount(--count < 0 ? 0 : count);
        localStorage.setItem('count', count);
    };

    const resetCount = () => {
        setCount(initialCount);
        localStorage.setItem('count', initialCount);
    }

    return (<div className="container">
    
    
    <button className="btn btn-outline-primary" type="button" id="decrement" onClick={decrementCount}>Decrement</button>
    <span id="count" className={"badge m-4 " + (count > 10 ? "bg-danger" : "bg-success")}>{count}</span> 
    <button className="btn btn-outline-primary mt" type="button" id="increment" onClick={incrementCount}>Increment</button>
    <br />
    <button className="btn btn-outline-primary" type="reset" id="reset" onClick={resetCount} style={{display:(count == initialCount ? "none" : "")}}>Reset</button>
    </div>);

    

}


export default Counter;