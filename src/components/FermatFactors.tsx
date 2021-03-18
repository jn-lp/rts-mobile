import React, {useState} from "react";
import fermatFactors from "../lib/fermatFactors";

function FermatFactors() {
    const [number, setNumber] = useState<number>(0)
    const [factors, setFactors] = useState<Array<number>>([])
    const [foundIn, setFoundIn] = useState<number>(0)

    return (
        <div className="FermatFactors">
            <header className="App__Header">
                Fermat’s Factorization Method
            </header>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={number}
                onChange={({target}) =>
                    setNumber(Number.parseInt(target.value))
                }
                style={{borderColor: "#2191FB"}}
            />
            <button onClick={() => {
                const {factors, foundIn} = fermatFactors(number)
                setFoundIn(foundIn)
                setFactors(factors)
            }} style={{backgroundColor: "#2191FB"}}>Calculate
            </button>
            {factors.join(' * ')}
            {foundIn && <span>found in: {foundIn} iterations</span>}
        </div>
    );
}

export default FermatFactors;
