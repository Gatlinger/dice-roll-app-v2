import React from "react";
import c from './ResultBlock.module.css'
import {ResultNameBlock} from "./ResultComponents/ResultNameBlock";
import {ResultLogBlock} from "./ResultComponents/ResultLogBlock";
import {DicesType} from "../../App";

type ResultBlockPropsType = {
    d20Array: Array<number>
    otherDicesArray: DicesType[]
}

export const ResultBlock = (props:ResultBlockPropsType) => {
    return (
        <div className={c.ResultBlock}>
            <ResultNameBlock/>
            <ResultLogBlock d20Array={props.d20Array} otherDicesArray={props.otherDicesArray}/>
        </div>
    )
}