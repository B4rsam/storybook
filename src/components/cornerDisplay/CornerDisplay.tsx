import { FC, HTMLAttributes, ReactNode } from "react";
import './cornerdisplay.sass';

type validTypes = "card" | "input";
interface ICorner extends HTMLAttributes<HTMLDivElement> {
    type: validTypes;
    children: ReactNode | undefined
}

const CornerDisplay : FC<ICorner> = ({type, children, ...other}) => {
    return (
        <div {...other} className={`main ${type ? type : `card`}`}>{children}</div>
    )
}

export default CornerDisplay;