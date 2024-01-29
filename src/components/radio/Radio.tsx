import {FC, HTMLAttributes } from "react";
import s from './radio.module.sass'

interface IRadio extends HTMLAttributes<HTMLInputElement> {
    radioName: string
}

const Radio : FC<IRadio> = ({radioName}) => {
    return (
       <form className={s.radioHolder}>
            <input type="radio" className={s.radioButton} name={radioName}/>
            <input type="radio" className={s.radioButton} name={radioName}/>
       </form>
    )
}

export default Radio