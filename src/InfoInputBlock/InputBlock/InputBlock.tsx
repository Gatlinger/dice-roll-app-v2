import React from "react";
import c from './InputBlock.module.css'
import {Button} from "../../OtherComponents/Button";

export const InputBlock = () => {
    return (
        <div>
            <div className={c.text}>
                InputBlock
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div className={c.test}>
                <span>
                    <input type={'number'}  className={c.inputClass}/>
                </span>
                <span>
                    <Button name={'+1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                    <Button name={'-1'} onClickButtonHandler={()=>{}} className={'CountButton'}/>
                </span>
            </div>
            <div>
                <Button name={'ROLL'} className={'RollButton'} onClickButtonHandler={()=>{}}/>
            </div>
        </div>
    )
}