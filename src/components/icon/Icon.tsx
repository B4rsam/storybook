import { FC } from 'react';
import './icon.sass';

type iconSize = "xs" | "s" | "m" | "l" | "xl";
interface IIcon extends HTMLDivElement {
    size: iconSize;
}

const Icon: FC<Partial<IIcon>> = ({size, children, ...other}) => {
    return (
        <div {...other} className={`icon ${size}`}>{children}</div>
    )
}

export default Icon