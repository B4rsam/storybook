import { FC, HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import s from './popup.module.sass'

interface IPopup extends HTMLAttributes<HTMLDivElement> {
    popupIcon: any;
    titleText: string;
    contentText: string;
}

const Popup : FC<IPopup> = ({popupIcon, titleText, contentText}) => {
    return (
        <div className={`heavyShadow ${s.popup}`}>
            <Icon size="xl" icon={popupIcon} className={s.icon}/>
            <div className={s.popupText}>
                <Typography textType="subtitle1" className={s.subtitle1} fontStyle="normal" fontWeight={700} children={titleText}/>
                <Typography textType="body2" fontStyle="normal" fontWeight={400} children={contentText}/> 
            </div>
            <Button size="small" btntype="circle" classname={s.popupbtn} children={<Icon className={s.icon} icon="close" size="m" />}/>
        </div>
    )
}

export default Popup;