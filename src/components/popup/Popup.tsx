import { FC, HTMLAttributes, ReactNode } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import './popup.sass'

interface IPopup extends HTMLAttributes<HTMLDivElement> {
    popupIcon : iconTypes;
}

const Popup : FC<IPopup> = ({popupIcon}) => {
    return (
        <div className="popup">
            <Icon size="l" icon={popupIcon}/>
            <Typography />
            <Typography />
            <Button />
        </div>
    )
}

export default Popup;