import React from "react";
import c from './ResultSumBlock.module.css'
import {ResultBlock} from "./ResultBlock/ResultBlock";
import {SumBlock} from "./SumBlock/SumBlock";
import {DicesType} from "../App";

type ResultSumBlockPropsType = {
    d20Array: Array<number>
    SUM: number
    otherDicesArray: DicesType[]
}


export const ResultSumBlock = (props:ResultSumBlockPropsType) => {
    return (
        <div className={c.ResultSumBlock}>
            <ResultBlock d20Array={props.d20Array} otherDicesArray={props.otherDicesArray}/>
            <SumBlock SUM={props.SUM}/>
        </div>
    )
}