import {FC, HTMLAttributes, ReactNode} from "react";
import './shadow.sass'

type Shadows = 1 | 2;
interface IShadow extends HTMLAttributes<HTMLDivElement> {
    type?: Shadows;
    children: ReactNode | undefined;
}

const ShadowBox : FC<IShadow> = ({type = 2, children, ...other}) => {
    const shadowType = () => {
        switch(type) {
            case 1:
                return "heavyShadow";
            case 2:
            default:
                return "lightShadow";
        }
    }
    return (
        <div {...other} className={`box ${shadowType()}`}>{children}</div>
    )
}

export default ShadowBox;
