import { FC, HTMLAttributes, ReactNode } from "react";
import Icon from "../icon/Icon";
import './form.sass';

type inputTypes = "input" | "selection";
type shapes = "pill" | "normal";
type icons = "search" | "eye" | undefined;
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
                return ( 
                <>
                    <i><Icon icon="search" size="s"/></i>
                    <input placeholder={placeHolder} className={`field input ${shape}`} />
                </> );
            case "selection":
                return ( <select className={`field selection ${shape}`}>
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