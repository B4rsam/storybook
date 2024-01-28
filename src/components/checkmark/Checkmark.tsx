import { FC, HTMLAttributes} from "react";
import './checkmark.sass';

type checkSize = "small" | "medium";
interface ICheck extends HTMLAttributes<HTMLInputElement> {
    boxSize: checkSize;
}

const Checkmark : FC<Partial<ICheck>> = ({boxSize, ...other}) => {
    return (
        <input id="chkbox" type="checkbox" {...other} className={`checkbox ${boxSize}`}/>
    )
}

export default Checkmark;