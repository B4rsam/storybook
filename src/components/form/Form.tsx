import { FC, HTMLAttributes } from "react";
import Icon from "../icon/Icon";
import s from './form.module.sass';

type shapes = "pill" | "normal";
type icons = "search" | "eye" | "none" | undefined;
interface IInput extends HTMLAttributes<HTMLInputElement> {
    placeHolder: string;
    shape: shapes;
    icon?: icons;
}

const Form : FC<IInput> = ({placeHolder, shape, icon, className, ...other}) => {

    const handleType = () => {
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
            default:
                return (
                    <div className={`input ${s.field} ${s[shape]} ${className}`}>
                        <input type="text" placeholder={placeHolder} />
                    </div>
                )
        } 
    }
    return (
        <div {...other}>{handleType()}</div>
    )
}

export default Form;