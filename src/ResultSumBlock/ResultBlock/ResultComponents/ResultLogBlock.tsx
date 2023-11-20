import React from "react";
import c from './ResultComponents.module.css'
import {DicesType} from "../../../App";

type ResultLogBlockPropsType = {
    d20Array: Array<number>
    otherDicesArray: DicesType[]
}

export const ResultLogBlock = (props:ResultLogBlockPropsType) => {

    return (
        <div className={c.ResultLogBlock}>
            <div>
                {props.d20Array.map(n=> <div>D20 - {n}</div> )}
            </div>
            <div>
                {props.otherDicesArray.map( d => <div>{d.name} - {d.value}</div> )}
            </div>
        </div>
    )
}