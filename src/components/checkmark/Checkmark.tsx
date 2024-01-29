import { FC, HTMLAttributes} from "react";
import Icon from "../icon/Icon";
import check from "../../assets/checkmark/check-svgrepo-com-2.svg"
import './checkmark.sass';

type checkSize = "small" | "medium";
interface ICheck extends HTMLAttributes<HTMLInputElement> {
    boxSize: checkSize;
    id: string;
}

const Checkmark : FC<Partial<ICheck>> = ({boxSize, id, ...other}) => {
    return (
        <label className={`checkboxContainer ${boxSize}`}>
            <input id={id} type="checkbox" {...other} className={`checkbox`}/>
            <div className={`checkboxControl ${boxSize}`}/>
        </label>
        
    )
}

export default Checkmark;