import React from "react";
import c from './ResultComponents.module.css'

type ResultLogBlockPropsType = {
    d20Array: Array<number>
}

export const ResultLogBlock = (props:ResultLogBlockPropsType) => {
    return (
        <div className={c.ResultLogBlock}>
            <div>
                {props.d20Array.map(n=> <div>D20 - {n}</div> )}
            </div>
        </div>
    )
}