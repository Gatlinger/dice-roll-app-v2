import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { InputBlock } from "./InputBlock/InputBlock";
import c from './InfoInputBlock.module.css'
import {DiceDataType} from "../App";

type InfoInputBlockPropsType = {
    rollOneD20: () => void
    rollManyDices: () => void
    d20Value: number
    setD20Value: (value:number) => void
    DiceData: DiceDataType
}

export const InfoInputBlock = (props:InfoInputBlockPropsType) => {
    return (
        <div className={c.InfoInputBlock}>
            <InfoBlock rollOneD20={props.rollOneD20}/>
            <InputBlock
                rollManyDices={props.rollManyDices}
                d20Value={props.d20Value}
                setD20Value={props.setD20Value} DiceData={props.DiceData}/>
        </div>
    )
}