import { FC } from 'react'
import './shadow.sass'

type Shadows = 1 | 2;
interface IShadow extends HTMLDivElement {
    type : Shadows;
}

const ShadowBox : FC<IShadow> = ({type, children, ...other}) => {
    const shadowType = () => {
        switch(type) {
            case 1:
                return "heavyShadow";
            case 2:
                return "lightShadow";
            default:
                break;
        }
    }
    return (
        <div {...other} className={shadowType()}>{children}</div>
    )
}

export default ShadowBox;