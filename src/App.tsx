import React, {useState} from 'react'
import './App.css'
import fermatFactors from "./lib/fermatFactors";

function App() {
    const [number, setNumber] = useState<number>(0)
    const [factors, setFactors] = useState<Array<number>>([])
    const [foundIn, setFoundIn] = useState<number>(0)

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
            <button onClick={() => {
                const {factors, foundIn} = fermatFactors(number)
                setFoundIn(foundIn)
                setFactors(factors)
            }}>Calculate
            </button>
            {factors.join(' * ')}
            {foundIn && <span>found in: {foundIn} iterations</span>}
        </div>
    );
}

export default App;
