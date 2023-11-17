import React from "react";
import c from './ResultSumBlock.module.css'
import {ResultBlock} from "./ResultBlock/ResultBlock";
import {SumBlock} from "./SumBlock/SumBlock";

export const ResultSumBlock = () => {
    return (
        <div className={c.ResultSumBlock}>
            <ResultBlock/>
            <SumBlock/>
        </div>
    )
}