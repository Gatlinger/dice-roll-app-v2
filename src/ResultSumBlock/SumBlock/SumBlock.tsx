import React from "react";
import c from './SumBlock.module.css'
import {SumNameBlock} from "./SumComponents/SumNameBlock";
import {SumLogBlock} from "./SumComponents/SumLogBlock";

type SumBlockPropsType = {
    SUM: number
}

export const SumBlock = (props:SumBlockPropsType) => {
    return (
        <div className={c.SumBlock}>
            <SumNameBlock/>
            <SumLogBlock SUM={props.SUM}/>
        </div>
    )
}