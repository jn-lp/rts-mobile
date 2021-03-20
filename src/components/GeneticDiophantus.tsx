import React, {useState} from "react";
import GeneticDiophantusClass from "../lib/geneticDiophantus";

function GeneticDiophantus() {
    const [a, setA] = useState<void | number>()
    const [b, setB] = useState<void | number>()
    const [c, setC] = useState<void | number>()
    const [d, setD] = useState<void | number>()

    const [k1, setK1] = useState(0)
    const [k2, setK2] = useState(0)
    const [k3, setK3] = useState(0)
    const [k4, setK4] = useState(0)
    const [y, setY] = useState(0)

    return (
        <div className="GeneticDiophantus">
            <header className="App__Header">
                {a && b && c && d ? `a=${a} b=${b} c=${c} d=${d}` : "Genetic Diophantus"}
            </header>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={k1}
                onChange={({target}) =>
                    setK1(Number.parseInt(target.value))
                }
                style={{borderColor: "#f4511e"}}
            />
            <h4>a +</h4>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={k2}
                onChange={({target}) =>
                    setK2(Number.parseInt(target.value))
                }
                style={{borderColor: "#f4511e"}}
            />
            <h4>b +</h4>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={k3}
                onChange={({target}) =>
                    setK3(Number.parseInt(target.value))
                }
                style={{borderColor: "#f4511e"}}
            />
            <h3>c +</h3>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={k4}
                onChange={({target}) =>
                    setK4(Number.parseInt(target.value))
                }
                style={{borderColor: "#f4511e"}}
            />
            <h4>d =</h4>
            <input
                type={"number"}
                inputMode={"numeric"}
                value={y}
                onChange={({target}) =>
                    setY(Number.parseInt(target.value))
                }
                style={{borderColor: "#f4511e"}}
            />
            <button
                onClick={() => {
                    const [a, b, c, d] = new GeneticDiophantusClass({task: [k1, k2, k3, k4], target: y}).solve()

                    setA(a)
                    setB(b)
                    setC(c)
                    setD(d)
                }}
                style={{backgroundColor: "#f4511e"}}
            >
                Find
            </button>
        </div>
    );
}

export default GeneticDiophantus;
