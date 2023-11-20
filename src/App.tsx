import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {InfoInputBlock} from './InfoInputBlock/InfoInputBlock';
import {ResultSumBlock} from "./ResultSumBlock/ResultSumBlock";

export type DicesType = {
    name: string
    sides: number
}

export type DiceDataType = {
    [x: string]: DicesType
}

function App() {

    const [d20Array, setD20Array] = useState<Array<number>>([])
    const [d20Value, setD20Value] = useState(0)
    const [SUM, setSUM] = useState(0)
    const [otherDicesArray, setOtherDicesArray] = useState<DicesType[]>([])

    const DiceIDs = {
        D20ID: v1(),
        D12ID: v1(),
        D8ID: v1()
    }
    const DiceData: DiceDataType = {
        [DiceIDs.D20ID]: {
            name: 'D20',
            sides: 20
        },
        [DiceIDs.D12ID]: {
            name: 'D12',
            sides: 12
        },
        [DiceIDs.D8ID]: {
            name: 'D8',
            sides: 8
        }
    }

    const rollOneD20 = () => {
        setD20Array([])
        let oneNewD20 = Math.floor(Math.random() * 20 + 1)
        setD20Array([oneNewD20])
        setSUM(oneNewD20)
    }
    const rollManyDices = () => {
        alert('Rolling')
    }
    // const rollManyD20 = () => {
    //     setD20Array([])
    //     setSUM(0)
    //     for (let i = 0; i < d20Value; i++) {
    //         let oneNewD20 = Math.floor(Math.random() * 20 + 1)
    //         setD20Array(prev => [oneNewD20, ...prev])
    //         setSUM(prev => prev + oneNewD20)
    //     }
    // }
    //

    return (
        <div className={'App'}>
            <InfoInputBlock
                rollOneD20={rollOneD20}
                rollManyDices={rollManyDices}
                d20Value={d20Value}
                setD20Value={setD20Value}
                DiceData={DiceData}/>
            <ResultSumBlock
                d20Array={d20Array}
                SUM={SUM}
                otherDicesArray={otherDicesArray}/>
            <div>
                <button>019</button>
            </div>
        </div>
    )
}

export default App;
