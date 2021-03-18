import React, {useState} from "react";

function Perceptron() {
    return (
        <div className="FermatFactors">
            <header className="App__Header">
                Perceptron
            </header>
            <input
                type={"number"}
                inputMode={"numeric"}
                style={{borderColor: "#157F1F"}}
            />
            <button onClick={() => {
            }} style={{backgroundColor: "#157F1F"}}>Calculate
            </button>
        </div>
    );
}

export default Perceptron;
