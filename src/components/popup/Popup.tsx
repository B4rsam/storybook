import { FC, HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import './popup.sass'

interface IPopup extends HTMLAttributes<HTMLDivElement> {
    popupIcon: any;
    titleText: string;
    contentText: string;
}

const Popup : FC<IPopup> = ({popupIcon, titleText, contentText}) => {
    return (
        <div className="popup">
            <Icon size="xl" icon={popupIcon}/>
            <div className="popupText">
                <Typography textType="subtitle1" fontStyle="normal" fontWeight={700} children={titleText}/>
                <Typography textType="body2" fontStyle="normal" fontWeight={400} children={contentText}/> 
            </div>
            <Button size="small" btntype="tertiary" classname="popupbtn" children={<Icon icon="close" size="m" />}/>
        </div>
    )
}

export default Popup;