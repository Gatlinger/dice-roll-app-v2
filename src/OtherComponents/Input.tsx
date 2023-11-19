import React from "react";
import c from "./OtherComponents.module.css"

type InputPropsType = {
    value: number
    onChange: () => void
    className: string
}

export const Input = (props: InputPropsType) => {
    return (
        <input type={"number"} value={props.value} onChange={props.onChange} className={c[props.className]}/>
    )
}