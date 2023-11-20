import React from "react";
import c from './InfoBlock.module.css'
import {Button} from "../../OtherComponents/Button";

type InfoBlockPropsType = {
    rollOneD20: () => void
}

export const InfoBlock = (props:InfoBlockPropsType) => {
    return (
        <div>
            <div>
                InfoBlock
            </div>
            <div>
                <span>
                <Button name={'1'} onClickButtonHandler={props.rollOneD20} className={'One'}/>
                </span>
                <span>
                    <img className={c.diceimg} src={'https://www.worldanvil.com/uploads/images/8e9486853aca1bb2be80d1209cb40ecb.png'}/>
                </span>
                <span className={'text'}>D20</span>
            </div>
        </div>
    )
}