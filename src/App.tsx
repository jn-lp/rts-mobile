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
import GeneticDiophantus from "./components/GeneticDiophantus";

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
                <Link to="/geneticDiophantus" activeStyle={{color: "#f4511e"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 2C14.1422 2 15.8911 3.68397 15.9951 5.80036L16 6L16.0009 6.17102C16.8483 6.47084 17.5208 7.1406 17.8244 7.9862C18.3775 7.93309 18.8969 7.68887 19.2929 7.29289C19.7004 6.88542 19.9471 6.34728 19.9924 5.77695L20 5.58579V5L20.0067 4.88338C20.0645 4.38604 20.4872 4 21 4C21.5128 4 21.9355 4.38604 21.9933 4.88338L22 5V5.58579L21.9938 5.81922C21.9364 6.9049 21.4797 7.93447 20.7071 8.70711C19.9777 9.4365 19.0193 9.88428 18.0009 9.98045L18 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H18L18.0009 16.0196C19.0193 16.1157 19.9777 16.5635 20.7071 17.2929C21.4797 18.0655 21.9364 19.0951 21.9938 20.1808L22 20.4142V21C22 21.5523 21.5523 22 21 22C20.4872 22 20.0645 21.614 20.0067 21.1166L20 21V20.4142C20 19.7739 19.7456 19.1599 19.2929 18.7071C18.8854 18.2996 18.3473 18.0529 17.777 18.0076L17.6573 18.0037C16.8326 20.3322 14.6111 22 12 22C9.38895 22 7.16744 20.3322 6.34272 18.0037L6.22305 18.0076C5.65272 18.0529 5.11458 18.2996 4.70711 18.7071C4.29963 19.1146 4.05285 19.6527 4.00757 20.223L4 20.4142V21L3.99327 21.1166C3.93551 21.614 3.51284 22 3 22C2.48716 22 2.06449 21.614 2.00673 21.1166L2 21V20.4142L2.00617 20.1808C2.06362 19.0951 2.52026 18.0655 3.29289 17.2929C4.02253 16.5633 4.98129 16.1154 6.00005 16.0195L6 14H3C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12H6L6.00005 9.98054C4.98129 9.88457 4.02253 9.43674 3.29289 8.70711C2.52026 7.93447 2.06362 6.9049 2.00617 5.81922L2 5.58579V5C2 4.44772 2.44772 4 3 4C3.51284 4 3.93551 4.38604 3.99327 4.88338L4 5V5.58579C4 6.22608 4.25435 6.84014 4.70711 7.29289C5.10309 7.68887 5.62246 7.93309 6.17485 7.98811C6.47931 7.14027 7.15224 6.47032 8.00009 6.17067L8 6C8 3.79086 9.79086 2 12 2ZM9 8C8.48716 8 8.06449 8.38604 8.00673 8.88338L8 9V16C8 18.2091 9.79086 20 12 20C14.1422 20 15.8911 18.316 15.9951 16.1996L16 16V9C16 8.48716 15.614 8.06449 15.1166 8.00673L15 8H9ZM10.0055 5.85074C10.0818 4.81588 10.9456 4 12 4L12.1493 4.00549L12.3028 4.02277C13.2637 4.16869 14 4.99836 14 6H10L10.0055 5.85074Z"
                              fill="currentColor"/>
                    </svg>
                    Genetic Diophantus
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
                    <Route path="/geneticDiophantus">
                        <GeneticDiophantus/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
