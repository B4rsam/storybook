import { FC, HTMLAttributes, ReactNode } from "react";
import Icon from "../icon/Icon";
import './form.sass';

type inputTypes = "input" | "selection";
type shapes = "pill" | "normal";
type icons = "search" | "eye" | "both" | undefined;
interface IInput extends HTMLAttributes<HTMLInputElement> {
    inputType: inputTypes;
    placeHolder: string;
    shape: shapes;
    icon: icons;
}

const Form : FC<IInput> = ({inputType, placeHolder, shape, icon, ...other}) => {

    const handleType = () => {
        switch(inputType) {
            case "input":
                return ( <input placeholder={placeHolder} className={`inputField ${shape}`} /> );
            case "selection":
                return ( <select>
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