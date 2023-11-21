import React, {useState} from "react";
import c from './InputBlock.module.css'
import {Button} from "../../OtherComponents/Button";
import {Input} from "../../OtherComponents/Input";
import {DiceDataType, DiceIDType} from "../../App";

type InputBlockPropsType = {
    rollManyDices: () => void
    d20Value: number
    setD20Value: (value: number) => void
    DiceData: DiceDataType
    DiceIDs: DiceIDType
}

export const InputBlock = (props: InputBlockPropsType) => {

    const incrementFunction = () => {
        props.setD20Value(props.d20Value + 1)
    }
    const decrementFunction = () => {
        if (props.d20Value > 0) {
            props.setD20Value(props.d20Value - 1)
        }
    }

    return (
        <div>
            <div className={c.text}>
                InputBlock
            </div>

            <div className={c.test}>
                <span>
                    <Input className={'inputClass'} value={props.DiceData[props.DiceIDs.D20ID].value} onChange={() => {
                    }}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={incrementFunction} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={decrementFunction} className={'CountButton'}/>
                </span>
            </div>

            <div className={c.test}>
                <span>
                    <Input className={'inputClass'} value={props.d20Value} onChange={() => {
                    }}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={incrementFunction} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={decrementFunction} className={'CountButton'}/>
                </span>
            </div>

            <div>
                <Button name={'ROLL'} className={'RollButton'} onClickButtonHandler={props.rollManyDices}/>
            </div>



        </div>
    )
}