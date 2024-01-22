import { FC } from "react";
import './checkmark.sass';

type checkSize = "small" | "medium";
interface ICheck extends HTMLInputElement {
    boxSize: checkSize;
}

const Checkmark : FC<Partial<ICheck>> = ({boxSize, ...other}) => {
    return (
        <input type="checkbox" {...other} className={`checkbox ${boxSize}`}/>
    )
}

export default Checkmark;