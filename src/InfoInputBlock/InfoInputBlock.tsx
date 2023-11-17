import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { InputBlock } from "./InputBlock/InputBlock";
import c from './InfoInputBlock.module.css'

export const InfoInputBlock = () => {
    return (
        <div className={c.InfoInputBlock}>
            <InfoBlock/>
            <InputBlock/>
        </div>
    )
}