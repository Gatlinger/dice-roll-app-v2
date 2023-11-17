import React from "react";
import c from './SumBlock.module.css'
import {SumNameBlock} from "./SumComponents/SumNameBlock";
import {SumLogBlock} from "./SumComponents/SumLogBlock";

export const SumBlock = () => {
    return (
        <div className={c.SumBlock}>
            <SumNameBlock/>
            <SumLogBlock/>
        </div>
    )
}