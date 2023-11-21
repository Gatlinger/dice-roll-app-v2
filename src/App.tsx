import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {InfoInputBlock} from './InfoInputBlock/InfoInputBlock';
import {ResultSumBlock} from "./ResultSumBlock/ResultSumBlock";

export type DiceIDType = {
    D20ID: string,
    D12ID: string,
    D8ID: string
}

export type NewDiceType = {
    name: string
    value: number
}

type DicesType = {
    name: string
    sides: number
    value: number
}

export type DiceDataType = {
    [x: string]: DicesType
}

function App() {

    const [d20Array, setD20Array] = useState<Array<number>>([])
    const [d20Value, setD20Value] = useState(0)
    const [SUM, setSUM] = useState(0)
    const [otherDicesArray, setOtherDicesArray] = useState<NewDiceType[]>([])

    const DiceIDs: DiceIDType = {
        D20ID: v1(),
        D12ID: v1(),
        D8ID: v1()
    }
    const DiceData: DiceDataType = {
        [DiceIDs.D20ID]: {
            name: 'D20',
            sides: 20,
            value: 20
        },
        [DiceIDs.D12ID]: {
            name: 'D12',
            sides: 12,
            value: 0
        },
        [DiceIDs.D8ID]: {
            name: 'D8',
            sides: 8,
            value: 0
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
                DiceData={DiceData} DiceIDs={DiceIDs}/>
            <ResultSumBlock
                d20Array={d20Array}
                SUM={SUM}
                otherDicesArray={otherDicesArray}/>
            <div>
                <button>020</button>
            </div>
        </div>
    )
}

export default App;
