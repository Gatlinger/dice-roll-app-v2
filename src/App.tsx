import React from 'react';
import './App.css';
import {InfoInputBlock} from './InfoInputBlock/InfoInputBlock';
import {ResultSumBlock} from "./ResultSumBlock/ResultSumBlock";

function App() {



    return (
        <div className={'App'}>
            <InfoInputBlock/>
            <ResultSumBlock/>
            <div>
                <button>010</button>
            </div>
        </div>
    )
}

export default App;
