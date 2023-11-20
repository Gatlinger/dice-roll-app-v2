import React, {useState} from 'react';
import './App.css';
import {InfoInputBlock} from './InfoInputBlock/InfoInputBlock';
import {ResultSumBlock} from "./ResultSumBlock/ResultSumBlock";

function App() {

    const [d20Array, setD20Array] = useState<Array<number>>([])
    const [d20Value, setD20Value] = useState(0)
    const [SUM, setSUM] = useState(0)
    const rollOneD20 = () => {
        setD20Array([])
        let oneNewD20 = Math.floor(Math.random() * 20 + 1)
        setD20Array([oneNewD20])
        setSUM(oneNewD20)
    }
    const rollManyD20 = () => {
        setD20Array([])
        setSUM(0)
        for (let i = 0; i< d20Value; i++)
        {
            let oneNewD20 = Math.floor(Math.random() * 20 + 1)
            setD20Array(prev => [oneNewD20, ...prev])
            setSUM(prev => prev + oneNewD20)
        }
    }


    return (
        <div className={'App'}>
            <InfoInputBlock
                rollOneD20={rollOneD20}
                rollManyD20={rollManyD20}
                d20Value={d20Value}
                setD20Value={setD20Value}/>
            <ResultSumBlock
                d20Array={d20Array}
                SUM={SUM}/>
            <div>
                <button>013</button>
            </div>
        </div>
    )
}

export default App;
