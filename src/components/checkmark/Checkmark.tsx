import { FC, HTMLAttributes} from "react";
import s from './checkmark.module.sass';

type checkSize = "small" | "medium";
interface ICheck extends HTMLAttributes<HTMLInputElement> {
    boxSize: checkSize;
    id: string;
}

const Checkmark : FC<Partial<ICheck>> = ({boxSize, id, ...other}) => {
    return (
        <label className={`${s.checkboxContainer} ${s[boxSize]}`}>
            <input id={id} type="checkbox" {...other} className={`checkbox`}/>
            <div className={`${s.checkboxControl} ${s[boxSize]}`}/>
        </label>
        
    )
}

export default Checkmark;