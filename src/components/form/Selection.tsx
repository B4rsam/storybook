import { FC, HTMLAttributes, useId } from "react";
import s from './form.module.sass';

type shapes = "pill" | "normal";
interface IInput extends HTMLAttributes<HTMLSelectElement> {
    shape: shapes;
    options: Array<{value: any, label: any}>;
}

const Selection : FC<IInput>= ({shape, className, options = [], ...other}) => {
    return (
        <select {...other} className={`selection ${s.field} ${s[shape]} ${className}`}>
            {options.map((item) => <option key={useId()} value={item.value}>{item.label}</option>)}
        </select>
    )
}

export default Selection