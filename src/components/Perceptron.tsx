import React, {useState} from "react";
import PerceptronClass from "../lib/perceptron";

function Perceptron() {
    const [learningRate, setLearningRate] = useState<number>(0.001)
    const [deadline, setDeadline] = useState<number>(100)
    const [accuracy, setAccuracy] = useState<number>()
    const [perceptron, setPerceptron] = useState<PerceptronClass>()

    return (
        <div className="FermatFactors">
            <header className="App__Header">
                {accuracy ? `Accuracy: ${accuracy}` : "Perceptron"}
            </header>
            <select
                value={learningRate}
                onChange={({target}) =>
                    setLearningRate(Number.parseFloat(target.value))
                }
                placeholder={"Learning Rate"}
                style={{outlineColor: "#157F1F"}}
            >
                <option value="0.001">0,001</option>
                <option value="0.01">0,01</option>
                <option value="0.05">0,05</option>
                <option value="0.1">0,1</option>
                <option value="0.2">0,2</option>
                <option value="0.3">0,3</option>
            </select>
            <select
                value={deadline}
                onChange={({target}) =>
                    setDeadline(Number.parseInt(target.value))
                }
                placeholder={"Deadline"}
                style={{outlineColor: "#157F1F"}}
            >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
            </select>
            <button
                onClick={() => {
                    const p = perceptron || new PerceptronClass({threshold: 4, learningRate})

                    setAccuracy(p.learn([[0, 6], [3, 3], [1, 5], [2, 4]], deadline))

                    setPerceptron(p)
                }}
                style={{backgroundColor: "#157F1F"}}
            >
                Learn
            </button>
        </div>
    );
}

export default Perceptron;
