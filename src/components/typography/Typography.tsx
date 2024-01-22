import {FC, HTMLAttributes, ReactNode} from 'react';
import cs from "classnames";

import './typography.sass';

type textVariant= "header1" | "header2" | "header3" | "subtitle1" | "subtitle2" | "body1" | "body2";
type validWeights = 400 | 500 | 600 | 700 | null;
type validStyles = "italic" | "normal";
interface IText extends HTMLAttributes<HTMLParagraphElement> {
    textType: textVariant;
    fontWeight: validWeights;
    fontStyle: validStyles;
    children: ReactNode | undefined;
}

const Typography: FC<IText> = ({textType,  fontWeight, children, fontStyle, className,...other}) => {
    return (
        <p className={cs({[`fw-${fontWeight}`]: fontWeight}, {[`${fontStyle}`]: fontStyle}, {[`normal`]: !fontStyle}, textType, className)} {...other}>{children}</p>
    )
}

export default Typography
