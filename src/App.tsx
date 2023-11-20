import React, {useState} from 'react';
import './App.css';
import {InfoInputBlock} from './InfoInputBlock/InfoInputBlock';
import {ResultSumBlock} from "./ResultSumBlock/ResultSumBlock";

function App() {

    const [d20Array, setD20Array] = useState<Array<number>>([])
    const [d20Value, setD20Value] = useState(0)
    const a = 10
    const rollOneD20 = () => {
        setD20Array([])
        let oneNewD20 = Math.floor(Math.random() * 20 + 1)
        setD20Array([oneNewD20])
    }



    const rollManyD20 = () => {
        setD20Array([])
        for (let i = 0; i< d20Value; i++)
        {
            let oneNewD20 = Math.floor(Math.random() * 20 + 1)
            setD20Array(prev => [oneNewD20, ...prev])
        }
    }

    return (
        <div className={'App'}>
            <InfoInputBlock
                rollOneD20={rollOneD20}
                rollManyD20={rollManyD20}
                d20Value={d20Value}
                setD20Value={setD20Value}/>
            <ResultSumBlock d20Array={d20Array}/>
            <div>
                <button>011</button>
            </div>
        </div>
    )
}

export default App;
