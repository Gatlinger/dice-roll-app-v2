import React from "react";
import c from './SumComponents.module.css'

type SumLogBlockPropsType = {
    SUM: number
}

export const SumLogBlock = (props:SumLogBlockPropsType) => {
    return (
        <div className={c.SumLogBlock}>
            {props.SUM}
        </div>
    )
}