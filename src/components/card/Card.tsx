import { FC, HTMLAttributes } from "react";
import Avatar from "../avatar/Avatar";
import Typography from "../typography/Typography";
import s from './card.module.sass';

interface ICard extends HTMLAttributes<HTMLDivElement> {
    titleText : string;
    subText : string;
    caption : string;
}

const Card : FC<ICard> = ({titleText, subText, caption}) => {
    return (
        <div className={s.card}>
            <Avatar size="l"/>
            <div className={s.textBox}>
                <Typography fontStyle="normal" fontWeight={700} textType="subtitle1" children={titleText}/>
                <Typography fontStyle="normal" fontWeight={400} textType="subtitle2" children={subText}/>
                <Typography fontStyle="normal" fontWeight={400} textType="body2" children={caption}/> 
            </div>
            
        </div>
    )
}

export default Card;