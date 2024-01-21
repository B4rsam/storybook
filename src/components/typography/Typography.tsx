import { FC } from 'react';
import './typography.sass';

type textVariant= "header1" | "header2" | "header3" | "subtitle1" | "subtitle2" | "body1" | "body2";
type validWeights = 400 | 500 | 600 | 700 | null;
interface IText extends HTMLParagraphElement {
    textType: textVariant;
    fontWeight: validWeights;
}

const Typography: FC<Partial<IText>> = ({textType,  fontWeight, children, ...other}) => {

    return (
        <p {...other} className={`${textType}${fontWeight ? ` fw-${fontWeight}` : ``}`} >{children}</p>
    )
}

export default Typography