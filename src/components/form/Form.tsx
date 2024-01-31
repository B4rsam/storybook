import { FC, HTMLAttributes } from "react";
import Icon from "../icon/Icon";
import s from './form.module.sass';

type inputTypes = "input" | "selection";
type shapes = "pill" | "normal";
type icons = "search" | "eye" | "none";
interface IInput extends HTMLAttributes<HTMLInputElement> {
    inputType: inputTypes;
    placeHolder: string;
    shape: shapes;
    icon: icons;
}

const Form : FC<IInput> = ({inputType, placeHolder, shape, icon, className, ...other}) => {

    const handleType = () => {
        switch(inputType) {
            case "input":
                    switch(icon) {
                        case "search":
                            return (
                                <div className={`input ${s.field} ${s[shape]} ${className}`}>
                                    <i><Icon className={s.icon} size="s" icon="search"/></i>
                                    <input type="text" placeholder={placeHolder} />
                                </div>
                            )
                        case "eye":
                            return (
                                <div className={`input ${s.field} ${s[shape]} ${className}`}>
                                    <i><Icon className={s.icon} size="s" icon="eye"/></i>
                                    <input type="text" placeholder={placeHolder} />
                                </div>
                            )
                        case "none":
                            return (
                                <div className={`input ${s.field} ${s[shape]} ${className}`}>
                                    <input type="text" placeholder={placeHolder} />
                                </div>
                            )
                    } 
            case "selection":
                return ( 
                <select className={`selection ${s.field} ${s[shape]} ${className}`}>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>)
        }
    }
    return (
        <>{handleType()}</>
    )
}

export default Form;