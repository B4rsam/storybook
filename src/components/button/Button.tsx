import { FC } from "react";
import './button.sass';

type buttons = "primary" | "secondary" | "tertiary";
type buttonSize = "small" | "medium" | "large";
interface IButton extends HTMLButtonElement {
    btntype : buttons;
    size : buttonSize;
}

const Button : FC<IButton> = ({btntype, children, size, ...other}) => {
    return (
        <button {...other} className={`button ${size} ${btntype}`}>{children}</button>
    )
}

export default Button