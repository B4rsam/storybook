import { FC, HTMLAttributes, ReactNode } from "react";
import './button.sass';

type buttons = "primary" | "secondary" | "tertiary" | "circle";
type buttonSize = "small" | "medium" | "large";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    btntype : buttons;
    size : buttonSize;
    children : ReactNode | undefined;
    classname : ReactNode
}

const Button : FC<IButton> = ({btntype, children, size, classname, ...other}) => {
    return (
        <button {...other} className={`button ${size} ${btntype} ${classname}`}>{children}</button>
    )
}

export default Button