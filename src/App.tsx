import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link
} from "react-router-dom";
import './App.css'
import FermatFactors from "./components/FermatFactors";
import Perceptron from "./components/Perceptron";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/" exact activeStyle={{color: "#2191FB"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M16.7071 4.29289L16.6129 4.2097C16.2206 3.90468 15.6534 3.93241 15.2929 4.29289L15.2097 4.3871C14.9047 4.77939 14.9324 5.34662 15.2929 5.70711L18.585 9H7L6.88338 9.00673C6.38604 9.06449 6 9.48716 6 10C6 10.5523 6.44772 11 7 11H21L21.1136 10.994C21.9277 10.9072 22.3097 9.89547 21.7071 9.29289L16.7071 4.29289ZM18.002 14C18.002 13.4477 17.5543 13 17.002 13H3.002L2.88837 13.006C2.07434 13.0928 1.69232 14.1045 2.2949 14.7071L7.2949 19.7071L7.38911 19.7903C7.7814 20.0953 8.34863 20.0676 8.70911 19.7071L8.7923 19.6129C9.09733 19.2206 9.0696 18.6534 8.70911 18.2929L5.417 15H17.002L17.1186 14.9933C17.616 14.9355 18.002 14.5128 18.002 14Z"
                              fill="currentColor"/>
                    </svg>
                    Fermat's Factors
                </Link>
                <Link to="/perceptron" activeStyle={{color: "#157F1F"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15 2C15.5523 2 16 2.44772 16 3V6H17C18.6569 6 20 7.34315 20 9V12C20 15.3137 17.3137 18 14 18H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18H10C6.68629 18 4 15.3137 4 12V9C4 7.34315 5.34315 6 7 6H8V3C8 2.44772 8.44772 2 9 2C9.55228 2 10 2.44772 10 3V6H14V3C14 2.44772 14.4477 2 15 2ZM17 8H7C6.44772 8 6 8.44772 6 9V12C6 14.2091 7.79086 16 10 16H14C16.2091 16 18 14.2091 18 12V9C18 8.44772 17.5523 8 17 8Z"
                              fill="currentColor"/>
                    </svg>
                    Perceptron
                </Link>
            </nav>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <FermatFactors/>
                    </Route>
                    <Route path="/perceptron">
                        <Perceptron/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
