import { FC } from 'react';
import './cornerdisplay.sass';

type validTypes = "card" | "input";
interface ICorner extends HTMLDivElement {
    type: validTypes;
}

const CornerDisplay : FC<ICorner> = ({type, children, ...other}) => {
    return (
        <div {...other} className={`main ${type ? type : `card`}`}>{children}</div>
    )
}

export default CornerDisplay;