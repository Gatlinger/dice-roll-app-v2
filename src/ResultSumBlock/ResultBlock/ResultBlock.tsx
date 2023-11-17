import React from "react";
import c from './ResultBlock.module.css'
import {ResultNameBlock} from "./ResultComponents/ResultNameBlock";
import {ResultLogBlock} from "./ResultComponents/ResultLogBlock";

export const ResultBlock = () => {
    return (
        <div className={c.ResultBlock}>
            <ResultNameBlock/>
            <ResultLogBlock/>
        </div>
    )
}