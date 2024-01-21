import { FC } from 'react';
import './typography.sass';

type textVariant= "header1" | "header2" | "header3" | "subtitle1" | "subtitle2" | "body1" | "body2";
interface IText extends HTMLParagraphElement {
    textType: textVariant;
}

const Typography: FC<Partial<IText>> = ({textType, children, ...other}) => {

    return (
        <p {...other} className={textType} >{children}</p>
    )
}

export default Typography