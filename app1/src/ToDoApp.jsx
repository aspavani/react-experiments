import React, { Component } from "react";

export default class ToDoApp extends Component {

    state = {
        name: "Pavani",
        weather: {
            currentCity: "Cleveland",
            description: "Sunny",
            temperature: 76
        },
        toDos: [
            "learn React",
            "eat",
            "sleep",
            "practice React",
            "watch React Pluralsight videos",
            "practice JavaScript",
        ]
    }
    render() {

        const { weather } = this.state;
        const { toDos } = this.state;

        console.log("To-Do list: ");
        for (let i = 0; i < toDos.length; i++)
            console.log(toDos[i]);

        return (
            <div>
                <h1> Welcome to {this.state.name}'s To-Do list!</h1>
                <h2> "The weather in {weather.currentCity} is {weather.description} with a temperature of {weather.temperature} degrees fahrenheit."</h2>
                <p>
                        {toDos.map((item, index) => (
                            <p>{index+1}. {item} </p>
                        ))}
                </p>
            </div>
        )



    }
}