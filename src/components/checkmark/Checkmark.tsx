import { FC, HTMLAttributes} from "react";
import Icon from "../icon/Icon";
import './checkmark.sass';

type checkSize = "small" | "medium";
interface ICheck extends HTMLAttributes<HTMLInputElement> {
    boxSize: checkSize;
    id: string;
}

const Checkmark : FC<Partial<ICheck>> = ({boxSize, id, ...other}) => {
    return (
        <label className={`checkboxContainer  ${boxSize}`}>
            <input id={id} type="checkbox" {...other} className={`checkbox`}/>
            <label className="checkLabel" htmlFor={id}><Icon size="s" icon="check" /></label>
        </label>
        
    )
}

export default Checkmark;