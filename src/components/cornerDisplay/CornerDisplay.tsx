import { FC, HTMLAttributes, ReactNode } from "react";
import s from './cornerdisplay.module.sass';

type validTypes = "card" | "input";
interface ICorner extends HTMLAttributes<HTMLDivElement> {
    type: validTypes;
    children: ReactNode | undefined
}

const CornerDisplay : FC<ICorner> = ({type, children, ...other}) => {
    return (
        <div {...other} className={`${s.main} ${type ? s[type] : `${s.card}`}`}>{children}</div>
    )
}

export default CornerDisplay;