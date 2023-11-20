import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { InputBlock } from "./InputBlock/InputBlock";
import c from './InfoInputBlock.module.css'

type InfoInputBlockPropsType = {
    rollOneD20: () => void
    rollManyD20: () => void
    d20Value: number
    setD20Value: (value:number) => void
}

export const InfoInputBlock = (props:InfoInputBlockPropsType) => {
    return (
        <div className={c.InfoInputBlock}>
            <InfoBlock rollOneD20={props.rollOneD20}/>
            <InputBlock
                rollManyD20={props.rollManyD20}
                d20Value={props.d20Value}
                setD20Value={props.setD20Value}/>
        </div>
    )
}