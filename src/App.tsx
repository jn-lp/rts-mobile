import React, {useState} from 'react'
import './App.css'
import fermatFactors from "./lib/fermatFactors";

function App() {
    const [number, setNumber] = useState<number>(0)
    const [factors, setFactors] = useState<Array<number>>([])

    return (
        <div className="App">
            <header className="App-header">
                Fermat’s Factorization Method
            </header>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={number}
                onChange={({target}) =>
                    setNumber(Number.parseInt(target.value))
                }
            />
            <button onClick={() => setFactors(fermatFactors(number))}>Calculate</button>
            {factors.join(' * ')}
        </div>
    );
}

export default App;
