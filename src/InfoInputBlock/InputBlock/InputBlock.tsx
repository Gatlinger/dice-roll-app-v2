import React, {useState} from "react";
import c from './InputBlock.module.css'
import {Button} from "../../OtherComponents/Button";
import { Input } from "../../OtherComponents/Input";

export const InputBlock = () => {

    let [d20Value, setD20Value] = useState(0)

    const incrementFunction = () => {setD20Value(d20Value + 1)}
    const decrementFunction = () => {
        if (d20Value > 0) {
        setD20Value(d20Value - 1)
        }
    }

    return (
        <div>
            <div className={c.text}>
                InputBlock
            </div>
            <div className={c.test}>
                <span>
                    <Input className={'inputClass'} value={d20Value} onChange={()=>{}}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={incrementFunction} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={decrementFunction} className={'CountButton'}/>
                </span>
            </div>
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div className={c.test}>*/}
            {/*    <span>*/}
            {/*        <input type={'number'}  className={c.inputClass}/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*        <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            <div>
                <Button name={'ROLL'} className={'RollButton'} onClickButtonHandler={()=>{}}/>
            </div>
        </div>
    )
}