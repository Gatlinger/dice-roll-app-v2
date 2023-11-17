import React from "react";

type ButtonPropsType = {
    name: string;
    className: string
    onClickButtonHandler: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.className} onClick={props.onClickButtonHandler}>{props.name}</button>
    )
}