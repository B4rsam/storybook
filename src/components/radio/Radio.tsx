import {FC, HTMLAttributes, ReactNode} from "react";
import './radio.sass'

interface IRadio extends HTMLAttributes<HTMLInputElement> {
    radioName: string
}

const Radio : FC<IRadio> = ({radioName}) => {
    return (
       <form className='radioHolder'>
            <input type="radio" className="radioButton" name={radioName}/>
            <input type="radio" className="radioButton" name={radioName}/>
       </form>
    )
}

export default Radio