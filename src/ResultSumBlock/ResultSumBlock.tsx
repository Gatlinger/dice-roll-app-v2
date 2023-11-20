import React from "react";
import c from './ResultSumBlock.module.css'
import {ResultBlock} from "./ResultBlock/ResultBlock";
import {SumBlock} from "./SumBlock/SumBlock";

type ResultSumBlockPropsType = {
    d20Array: Array<number>
    SUM: number
}


export const ResultSumBlock = (props:ResultSumBlockPropsType) => {
    return (
        <div className={c.ResultSumBlock}>
            <ResultBlock d20Array={props.d20Array}/>
            <SumBlock SUM={props.SUM}/>
        </div>
    )
}