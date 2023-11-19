import React from "react";
import c from './OtherComponents.module.css'

type ButtonPropsType = {
    name: string;
    className: string
    onClickButtonHandler: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={c[props.className]} onClick={props.onClickButtonHandler}>{props.name}</button>
    )
}